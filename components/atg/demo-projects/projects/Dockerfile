# Stage 1: Build the Golang application
FROM golang:1.18 AS go-builder
WORKDIR /app
COPY goapp/. ./
RUN go mod download

# Stage 2: Build the Node.js application
FROM node:18 AS js-builder
WORKDIR /app
COPY javaScript/. ./
RUN npm install
RUN npm install -g nyc  # Install nyc globally
RUN npm install js-yaml  # Install js-yaml

# Stage 3: Set up the Python environment
FROM ubuntu:latest as python-builder
RUN apt-get update && apt-get install -y software-properties-common && \
    add-apt-repository ppa:deadsnakes/ppa && \
    apt-get update && apt-get install -y python3.12 python3.12-venv python3.12-dev python3-pip curl lsof && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY python/. ./
RUN python3.12 -m venv venv && \
    . venv/bin/activate && \
    if [ -f "requirements.txt" ]; then pip install --no-cache-dir -r requirements.txt; fi

# Install keploy
RUN curl --silent -o keploy --location "https://keploy-enterprise.s3.us-west-2.amazonaws.com/releases/latest/enterprise_linux_amd64" 
RUN chmod a+x keploy && mkdir -p /usr/local/bin && mv keploy /usr/local/bin

# Final Stage: Assemble the final image
FROM ubuntu:latest as runtime
RUN apt-get update && apt-get install -y curl lsof sudo nano git golang-go

# Install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs

# Set up the working directory
WORKDIR /app

# Copy the Golang application source code and dependencies
COPY --from=go-builder /app /app/go-app
COPY --from=go-builder /go/pkg/mod /go/pkg/mod
COPY --from=go-builder /go/pkg/mod /root/go/pkg/mod

RUN mkdir -p /root/.keploy
COPY cred.yaml /root/.keploy/cred.yaml
COPY installation-id.yaml /root/.keploy/installation-id.yaml

# Copy the Node.js application code and node_modules
COPY --from=js-builder /app /app/js-app

# Ensure nyc is installed and available
COPY --from=js-builder /usr/local/lib/node_modules/nyc /usr/local/lib/node_modules/nyc
RUN ln -s /usr/local/lib/node_modules/nyc/bin/nyc.js /usr/local/bin/nyc

# Copy the Python application code and virtual environment
COPY --from=python-builder /app /app/python-app
COPY --from=python-builder /app/venv /app/venv

COPY --from=python-builder /usr/local/bin/keploy /usr/local/bin/keploy
RUN chmod +x /usr/local/bin/keploy

# Set environment variables for Python
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH="/app/python-app/venv/lib/python3.12/site-packages"

CMD ["sleep", "infinity"]