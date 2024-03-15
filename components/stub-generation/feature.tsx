export default function Features() {
    return (
      <section className="bg-white text-gray-900 py-20"> {/* Set the background to white and text to gray/black */}
        
        {/* Container to center content and padding */}
        <div className="container mx-auto px-4">
          
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">Key Features of Our Tool</h2> {/* Use orange for the heading */}
            <p className="text-xl mt-4">
              Transforming interactions into realistic, diverse, and customizable stubs for precise testing.
            </p>
          </div>
          
          {/* Grid of features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjust the number of columns for responsiveness */}
  
            {/* Feature 1 */}
            <div className="feature-item text-center">
              <div className="icon mb-4">
                {/* Placeholder for an icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-500">Dependency Wait Time</h3> {/* Use orange for subheadings */}
              <p>
                Eliminate waiting for dependent components, allowing parallel advancement in the development process.
              </p>
            </div>
  
            {/* Repeat for other features, replacing the placeholders with actual content and icons */}
            {/* ... */}
            
          </div>
        </div>
      </section>
    );
  }
  