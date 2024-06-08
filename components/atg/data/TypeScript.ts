import { Type, Directory } from "../Editor/utils/file-manager";

export const Data: Directory = {
  id: "root",
  name: "rootDir",
  parentId: "null",
  type: Type.DIRECTORY,
  depth: 0,
  dirs: [
    {
      id: "src",
      name: "src",
      parentId: "root",
      type: Type.DIRECTORY,
      depth: 1,
      dirs: [],
      files: [
        {
          id: "1",
          name: "go.mod",
          type: Type.FILE,
          parentId: "src",
          depth: 2,
          content:
            "module github.com/keploy/animal-app\n\n\
          go 1.19\n\n\
          require (\n\
            github.com/gin-gonic/gin v1.9.0\n\
            go.mongodb.org/mongo-driver v1.11.6\n\
          )\n\n\
          require (\n\
            github.com/bytedance/sonic v1.8.0 // indirect\n\
            github.com/chenzhuoyu/base64x v0.0.0-20221115062448-fe3a3abad311 // indirect\n\
            github.com/gin-contrib/sse v0.1.0 // indirect\n\
            github.com/go-playground/locales v0.14.1 // indirect\n\
            github.com/go-playground/universal-translator v0.18.1 // indirect\n\
            github.com/go-playground/validator/v10 v10.11.2 // indirect\n\
            github.com/goccy/go-json v0.10.0 // indirect\n\
            github.com/golang/snappy v0.0.1 // indirect\n\
            github.com/json-iterator/go v1.1.12 // indirect\n\
            github.com/klauspost/compress v1.13.6 // indirect\n\
            github.com/klauspost/cpuid/v2 v2.0.9 // indirect\n\
            github.com/leodido/go-urn v1.2.1 // indirect\n\
            github.com/mattn/go-isatty v0.0.17 // indirect\n\
            github.com/modern-go/concurrent v0.0.0-20180228061459-e0a39a4cb421 // indirect\n\
            github.com/modern-go/reflect2 v1.0.2 // indirect\n\
            github.com/montanaflynn/stats v0.0.0-20171201202039-1bf9dbcd8cbe // indirect\n\
            github.com/pelletier/go-toml/v2 v2.0.6 // indirect\n\
            github.com/pkg/errors v0.9.1 // indirect\n\
            github.com/twitchyliquid64/golang-asm v0.15.1 // indirect\n\
            github.com/ugorji/go/codec v1.2.9 // indirect\n\
            github.com/xdg-go/pbkdf2 v1.0.0 // indirect\n\
            github.com/xdg-go/scram v1.1.1 // indirect\n\
            github.com/xdg-go/stringprep v1.0.3 // indirect\n\
            github.com/youmark/pkcs8 v0.0.0-20181117223130-1be2e3e5546d // indirect\n\
            golang.org/x/arch v0.0.0-20210923205945-b76863e36670 // indirect\n\
            golang.org/x/crypto v0.5.0 // indirect\n\
            golang.org/x/net v0.7.0 // indirect\n\
            golang.org/x/sync v0.0.0-20210220032951-036812b2e83c // indirect\n\
            golang.org/x/sys v0.5.0 // indirect\n\
            golang.org/x/text v0.7.0 // indirect\n\
            google.golang.org/protobuf v1.28.1 // indirect\n\
            gopkg.in/yaml.v3 v3.0.1 // indirect\n\
          )\n\
          ",
        },
        {
          id: "2",
          name: "go.sum",
          type: Type.FILE,
          parentId: "src",
          depth: 2,
          content:
            "github.com/bytedance/sonic v1.5.0/go.mod h1:ED5hyg4y6t3/9Ku1R6dU/4KyJ48DZ4jPhfY1O2AihPM=\n\
          github.com/bytedance/sonic v1.8.0 h1:ea0Xadu+sHlu7x5O3gKhRpQ1IKiMrSiHttPF0ybECuA=\n\
          github.com/bytedance/sonic v1.8.0/go.mod h1:i736AoUSYt75HyZLoJW9ERYxcy6eaN6h4BZXU064P/U=\n\
          github.com/chenzhuoyu/base64x v0.0.0-20211019084208-fb5309c8db06/go.mod h1:DH46F32mSOjUmXrMHnKwZdA8wcEefY7UVqBKYGjpdQY=\n\
          github.com/chenzhuoyu/base64x v0.0.0-20221115062448-fe3a3abad311 h1:qSGYFH7+jGhDF8vLC+iwCD4WpbV1EBDSzWkJODFLams=\n\
          github.com/chenzhuoyu/base64x v0.0.0-20221115062448-fe3a3abad311/go.mod h1:b583jCggY9gE99b6G5LEC39OIiVsWj+R97kbl5odCEk=\n\
          github.com/davecgh/go-spew v1.1.0/go.mod h1:J7Y8YcW2NihsgmVo/mv3lAwl/skON4iLHjSsI+c5H38=\n\
          github.com/davecgh/go-spew v1.1.1 h1:vj9j/u1bqnvCEfJOwUhtlOARqs3+rkHYY13jYWTU97c=\n\
          github.com/davecgh/go-spew v1.1.1/go.mod h1:J7Y8YcW2NihsgmVo/mv3lAwl/skON4iLHjSsI+c5H38=\n\
          github.com/gin-contrib/sse v0.1.0 h1:Y/yl/+YNO8GZSjAhjMsSuLt29uWRFHdHYUb5lYOV9qE=\n\
          github.com/gin-contrib/sse v0.1.0/go.mod h1:RHrZQHXnP2xjPF+u1gW/2HnVO7nvIa9PG3Gm+fLHvGI=\n\
          github.com/gin-gonic/gin v1.9.0 h1:OjyFBKICoexlu99ctXNR2gg+c5pKrKMuyjgARg9qeY8=\n\
          github.com/gin-gonic/gin v1.9.0/go.mod h1:W1Me9+hsUSyj3CePGrd1/QrKJMSJ1Tu/0hFEH89961k=\n\
          github.com/go-playground/assert/v2 v2.2.0 h1:JvknZsQTYeFEAhQwI4qEt9cyV5ONwRHC+lYKSsYSR8s=\n\
          github.com/go-playground/locales v0.14.1 h1:EWaQ/wswjilfKLTECiXz7Rh+3BjFhfDFKv/oXslEjJA=\n\
          github.com/go-playground/locales v0.14.1/go.mod h1:hxrqLVvrK65+Rwrd5Fc6F2O76J/NuW9t0sjnWqG1slY=\n\
          github.com/go-playground/universal-translator v0.18.1 h1:Bcnm0ZwsGyWbCzImXv+pAJnYK9S473LQFuzCbDbfSFY=\n\
          github.com/go-playground/universal-translator v0.18.1/go.mod h1:xekY+UJKNuX9WP91TpwSH2VMlDf28Uj24BCp08ZFTUY=\n\
          github.com/go-playground/validator/v10 v10.11.2 h1:q3SHpufmypg+erIExEKUmsgmhDTyhcJ38oeKGACXohU=\n\
          github.com/go-playground/validator/v10 v10.11.2/go.mod h1:NieE624vt4SCTJtD87arVLvdmjPAeV8BQlHtMnw9D7s=\n\
          github.com/goccy/go-json v0.10.0 h1:mXKd9Qw4NuzShiRlOXKews24ufknHO7gx30lsDyokKA=\n\
          github.com/goccy/go-json v0.10.0/go.mod h1:6MelG93GURQebXPDq3khkgXZkazVtN9CRI+MGFi0w8I=\n\
          github.com/golang/protobuf v1.5.0/go.mod h1:FsONVRAS9T7sI+LIUmWTfcYkHO4aIWwzhcaSAoJOfIk=\n\
          github.com/golang/snappy v0.0.1 h1:Qgr9rKW7uDUkrbSmQeiDsGa8SjGyCOGtuasMWwvp2P4=\n\
          github.com/golang/snappy v0.0.1/go.mod h1:/XxbfmMg8lxefKM7IXC3fBNl/7bRcc72aCRzEWrmP2Q=\n\
          github.com/google/go-cmp v0.5.2/go.mod h1:v8dTdLbMG2kIc/vJvl+f65V22dbkXbowE6jgT/gNBxE=\n\
          github.com/google/go-cmp v0.5.5 h1:Khx7svrCpmxxtHBq5j2mp/xVjsi8hQMfNLvJFAlrGgU=\n\
          github.com/google/go-cmp v0.5.5/go.mod h1:v8dTdLbMG2kIc/vJvl+f65V22dbkXbowE6jgT/gNBxE=\n\
          github.com/google/gofuzz v1.0.0/go.mod h1:dBl0BpW6vV/+mYPU4Po3pmUjxk6FQPldtuIdl/M65Eg=\n\
          github.com/json-iterator/go v1.1.12 h1:PV8peI4a0ysnczrg+LtxykD8LfKY9ML6u2jnxaEnrnM=\n\
          github.com/json-iterator/go v1.1.12/go.mod h1:e30LSqwooZae/UwlEbR2852Gd8hjQvJoHmT4TnhNGBo=\n\
          github.com/klauspost/compress v1.13.6 h1:P76CopJELS0TiO2mebmnzgWaajssP/EszplttgQxcgc=\n\
          github.com/klauspost/compress v1.13.6/go.mod h1:/3/Vjq9QcHkK5uEr5lBEmyoZ1iFhe47etQ6QUkpK6sk=\n\
          github.com/klauspost/cpuid/v2 v2.0.9 h1:lgaqFMSdTdQYdZ04uHyN2d/eKdOMyi2YLSvlQIBFYa4=\n\
          github.com/klauspost/cpuid/v2 v2.0.9/go.mod h1:FInQzS24/EEf25PyTYn52gqo7WaD8xa0213Md/qVLRg=\n\
          github.com/kr/pretty v0.1.0/go.mod h1:dAy3ld7l9f0ibDNOQOHHMYYIIbhfbHSm3C4ZsoJORNo=\n\
          github.com/kr/pretty v0.3.0 h1:WgNl7dwNpEZ6jJ9k1snq4pZsg7DOEN8hP9Xw0Tsjwk0=\n\
          github.com/kr/pty v1.1.1/go.mod h1:pFQYn66WHrOpPYNljwOMqo10TkYh1fy3cYio2l3bCsQ=\n\
          github.com/kr/text v0.1.0/go.mod h1:4Jbv+DJW3UT/LiOwJeYQe1efqtUx/iVham/4vfdArNI=\n\
          github.com/kr/text v0.2.0 h1:5Nx0Ya0ZqY2ygV366QzturHI13Jq95ApcVaJBhpS+AY=\n\
          github.com/leodido/go-urn v1.2.1 h1:BqpAaACuzVSgi/VLzGZIobT2z4v53pjosyNd9Yv6n/w=\n\
          github.com/leodido/go-urn v1.2.1/go.mod h1:zt4jvISO2HfUBqxjfIshjdMTYS56ZS/qv49ictyFfxY=\n\
          github.com/mattn/go-isatty v0.0.17 h1:BTarxUcIeDqL27Mc+vyvdWYSL28zpIhv3RoTdsLMPng=\n\
          github.com/mattn/go-isatty v0.0.17/go.mod h1:kYGgaQfpe5nmfYZH+SKPsOc2e4SrIfOl2e/yFXSvRLM=\n\
          github.com/modern-go/concurrent v0.0.0-20180228061459-e0a39a4cb421 h1:ZqeYNhU3OHLH3mGKHDcjJRFFRrJa6eAM5H+CtDdOsPc=\n\
          github.com/modern-go/concurrent v0.0.0-20180228061459-e0a39a4cb421/go.mod h1:6dJC0mAP4ikYIbvyc7fijjWJddQyLn8Ig3JB5CqoB9Q=\n\
          github.com/modern-go/reflect2 v1.0.2 h1:xBagoLtFs94CBntxluKeaWgTMpvLxC4ur3nMaC9Gz0M=\n\
          github.com/modern-go/reflect2 v1.0.2/go.mod h1:yWuevngMOJpCy52FWWMvUC8ws7m/LJsjYzDa0/r8luk=\n\
          github.com/montanaflynn/stats v0.0.0-20171201202039-1bf9dbcd8cbe h1:iruDEfMl2E6fbMZ9s0scYfZQ84/6SPL6zC8ACM2oIL0=\n\
          github.com/montanaflynn/stats v0.0.0-20171201202039-1bf9dbcd8cbe/go.mod h1:wL8QJuTMNUDYhXwkmfOly8iTdp5TEcJFWZD2D7SIkUc=\n\
          github.com/pelletier/go-toml/v2 v2.0.6 h1:nrzqCb7j9cDFj2coyLNLaZuJTLjWjlaz6nvTvIwycIU=\n\
          github.com/pelletier/go-toml/v2 v2.0.6/go.mod h1:eumQOmlWiOPt5WriQQqoM5y18pDHwha2N+QD+EUNTek=\n\
          github.com/pkg/errors v0.9.1 h1:FEBLx1zS214owpjy7qsBeixbURkuhQAwrK5UwLGTwt4=\n\
          github.com/pkg/errors v0.9.1/go.mod h1:bwawxfHBFNV+L2hUp1rHADufV3IMtnDRdf1r5NINEl0=\n\
          github.com/pmezard/go-difflib v1.0.0 h1:4DBwDE0NGyQoBHbLQYPwSUPoCMWR5BEzIk/f1lZbAQM=\n\
          github.com/pmezard/go-difflib v1.0.0/go.mod h1:iKH77koFhYxTK1pcRnkKkqfTogsbg7gZNVY4sRDYZ/4=\n\
          github.com/rogpeppe/go-internal v1.8.0 h1:FCbCCtXNOY3UtUuHUYaghJg4y7Fd14rXifAYUAtL9R8=\n\
          github.com/stretchr/objx v0.1.0/go.mod h1:HFkY916IF+rwdDfMAkV7OtwuqBVzrE8GR6GFx+wExME=\n\
          github.com/stretchr/objx v0.4.0/go.mod h1:YvHI0jy2hoMjB+UWwv71VJQ9isScKT/TqJzVSSt89Yw=\n\
          github.com/stretchr/objx v0.5.0/go.mod h1:Yh+to48EsGEfYuaHDzXPcE3xhTkx73EhmCGUpEOglKo=\n\
          github.com/stretchr/testify v1.3.0/go.mod h1:M5WIy9Dh21IEIfnGCwXGc5bZfKNJtfHm1UVUgZn+9EI=\n\
          github.com/stretchr/testify v1.6.1/go.mod h1:6Fq8oRcR53rry900zMqJjRRixrwX3KX962/h/Wwjteg=\n\
          github.com/stretchr/testify v1.7.0/go.mod h1:6Fq8oRcR53rry900zMqJjRRixrwX3KX962/h/Wwjteg=\n\
          github.com/stretchr/testify v1.7.1/go.mod h1:6Fq8oRcR53rry900zMqJjRRixrwX3KX962/h/Wwjteg=\n\
          github.com/stretchr/testify v1.8.0/go.mod h1:yNjHg4UonilssWZ8iaSj1OCr/vHnekPRkoO+kdMU+MU=\n\
          github.com/stretchr/testify v1.8.1 h1:w7B6lhMri9wdJUVmEZPGGhZzrYTPvgJArz7wNPgYKsk=\n\
          github.com/stretchr/testify v1.8.1/go.mod h1:w2LPCIKwWwSfY2zedu0+kehJoqGctiVI29o6fzry7u4=\n\
          github.com/tidwall/pretty v1.0.0 h1:HsD+QiTn7sK6flMKIvNmpqz1qrpP3Ps6jOKIKMooyg4=\n\
          github.com/tidwall/pretty v1.0.0/go.mod h1:XNkn88O1ChpSDQmQeStsy+sBenx6DDtFZJxhVysOjyk=\n\
          github.com/twitchyliquid64/golang-asm v0.15.1 h1:SU5vSMR7hnwNxj24w34ZyCi/FmDZTkS4MhqMhdFk5YI=\n\
          github.com/twitchyliquid64/golang-asm v0.15.1/go.mod h1:a1lVb/DtPvCB8fslRZhAngC2+aY1QWCk3Cedj/Gdt08=\n\
          github.com/ugorji/go/codec v1.2.9 h1:rmenucSohSTiyL09Y+l2OCk+FrMxGMzho2+tjr5ticU=\n\
          github.com/ugorji/go/codec v1.2.9/go.mod h1:UNopzCgEMSXjBc6AOMqYvWC1ktqTAfzJZUZgYf6w6lg=\n\
          github.com/xdg-go/pbkdf2 v1.0.0 h1:Su7DPu48wXMwC3bs7MCNG+z4FhcyEuz5dlvchbq0B0c=\n\
          github.com/xdg-go/pbkdf2 v1.0.0/go.mod h1:jrpuAogTd400dnrH08LKmI/xc1MbPOebTwRqcT5RDeI=\n\
          github.com/xdg-go/scram v1.1.1 h1:VOMT+81stJgXW3CpHyqHN3AXDYIMsx56mEFrB37Mb/E=\n\
          github.com/xdg-go/scram v1.1.1/go.mod h1:RaEWvsqvNKKvBPvcKeFjrG2cJqOkHTiyTpzz23ni57g=\n\
          github.com/xdg-go/stringprep v1.0.3 h1:kdwGpVNwPFtjs98xCGkHjQtGKh86rDcRZN17QEMCOIs=\n\
          github.com/xdg-go/stringprep v1.0.3/go.mod h1:W3f5j4i+9rC0kuIEJL0ky1VpHXQU3ocBgklLGvcBnW8=\n\
          github.com/youmark/pkcs8 v0.0.0-20181117223130-1be2e3e5546d h1:splanxYIlg+5LfHAM6xpdFEAYOk8iySO56hMFq6uLyA=\n\
          github.com/youmark/pkcs8 v0.0.0-20181117223130-1be2e3e5546d/go.mod h1:rHwXgn7JulP+udvsHwJoVG1YGAP6VLg4y9I5dyZdqmA=\n\
          go.mongodb.org/mongo-driver v1.11.6 h1:XM7G6PjiGAO5betLF13BIa5TlLUUE3uJ/2Ox3Lz1K+o=\n\
          go.mongodb.org/mongo-driver v1.11.6/go.mod h1:G9TgswdsWjX4tmDA5zfs2+6AEPpYJwqblyjsfuh8oXY=\n\
          golang.org/x/arch v0.0.0-20210923205945-b76863e36670 h1:18EFjUmQOcUvxNYSkA6jO9VAiXCnxFY6NyDX0bHDmkU=\n\
          golang.org/x/arch v0.0.0-20210923205945-b76863e36670/go.mod h1:5om86z9Hs0C8fWVUuoMHwpExlXzs5Tkyp9hOrfG7pp8=\n\
          golang.org/x/crypto v0.0.0-20220622213112-05595931fe9d/go.mod h1:IxCIyHEi3zRg3s0A5j5BB6A9Jmi73HwBIUl50j+osU4=\n\
          golang.org/x/crypto v0.5.0 h1:U/0M97KRkSFvyD/3FSmdP5W5swImpNgle/EHFhOsQPE=\n\
          golang.org/x/crypto v0.5.0/go.mod h1:NK/OQwhpMQP3MwtdjgLlYHnH9ebylxKWv3e0fK+mkQU=\n\
          golang.org/x/net v0.0.0-20211112202133-69e39bad7dc2/go.mod h1:9nx3DQGgdP8bBQD5qxJ1jj9UTztislL4KSBs9R2vV5Y=\n\
          golang.org/x/net v0.7.0 h1:rJrUqqhjsgNp7KqAIc25s9pZnjU7TUcSY7HcVZjdn1g=\n\
          golang.org/x/net v0.7.0/go.mod h1:2Tu9+aMcznHK/AK1HMvgo6xiTLG5rD5rZLDS+rp2Bjs=\n\
          golang.org/x/sync v0.0.0-20210220032951-036812b2e83c h1:5KslGYwFpkhGh+Q16bwMP3cOontH8FOep7tGV86Y7SQ=\n\
          golang.org/x/sync v0.0.0-20210220032951-036812b2e83c/go.mod h1:RxMgew5VJxzue5/jJTE5uejpjVlOe/izrB70Jof72aM=\n\
          golang.org/x/sys v0.0.0-20201119102817-f84b799fce68/go.mod h1:h1NjWce9XRLGQEsW7wpKNCjG9DtNlClVuFLEZdDNbEs=\n\
          golang.org/x/sys v0.0.0-20210423082822-04245dca01da/go.mod h1:h1NjWce9XRLGQEsW7wpKNCjG9DtNlClVuFLEZdDNbEs=\n\
          golang.org/x/sys v0.0.0-20210615035016-665e8c7367d1/go.mod h1:oPkhp1MJrh7nUepCBck5+mAzfO9JrbApNNgaTdGDITg=\n\
          golang.org/x/sys v0.0.0-20220811171246-fbc7d0a398ab/go.mod h1:oPkhp1MJrh7nUepCBck5+mAzfO9JrbApNNgaTdGDITg=\n\
          golang.org/x/sys v0.5.0 h1:MUK/U/4lj1t1oPg0HfuXDN/Z1wv31ZJ/YcPiGccS4DU=\n\
          golang.org/x/sys v0.5.0/go.mod h1:oPkhp1MJrh7nUepCBck5+mAzfO9JrbApNNgaTdGDITg=\n\
          golang.org/x/term v0.0.0-20201126162022-7de9c90e9dd1/go.mod h1:bj7SfCRtBDWHUb9snDiAeCFNEtKQo2Wmx5Cou7ajbmo=\n\
          golang.org/x/text v0.3.6/go.mod h1:5Zoc/QRtKVWzQhOtBMvqHzDpF6irO9z98xDceosuGiQ=\n\
          golang.org/x/text v0.3.7/go.mod h1:u+2+/6zg+i71rQMx5EYifcz6MCKuco9NR6JIITiCfzQ=\n\
          golang.org/x/text v0.7.0 h1:4BRB4x83lYWy72KwLD/qYDuTu7q9PjSagHvijDw7cLo=\n\
          golang.org/x/text v0.7.0/go.mod h1:mrYo+phRRbMaCq/xk9113O4dZlRixOauAjOtrjsXDZ8=\n\
          golang.org/x/tools v0.0.0-20180917221912-90fa682c2a6e/go.mod h1:n7NCudcB/nEzxVGmLbDWY5pfWTLqBcC2KZ6jyYvM4mQ=\n\
          golang.org/x/xerrors v0.0.0-20191204190536-9bdfabe68543 h1:E7g+9GITq07hpfrRu66IVDexMakfv52eLZ2CXBWiKr4=\n\
          golang.org/x/xerrors v0.0.0-20191204190536-9bdfabe68543/go.mod h1:I/5z698sn9Ka8TeJc9MKroUUfqBBauWjQqLJ2OPfmY0=\n\
          google.golang.org/protobuf v1.26.0-rc.1/go.mod h1:jlhhOSvTdKEhbULTjvd4ARK9grFBp09yW+WbY/TyQbw=\n\
          google.golang.org/protobuf v1.28.1 h1:d0NfwRgPtno5B1Wa6L2DAG+KivqkdutMf1UhdNx175w=\n\
          google.golang.org/protobuf v1.28.1/go.mod h1:HV8QOd/L58Z+nl8r43ehVNZIU/HEI6OcFqwMG9pJV4I=\n\
          gopkg.in/check.v1 v0.0.0-20161208181325-20d25e280405/go.mod h1:Co6ibVJAznAaIkqp8huTwlJQCZ016jof/cbN4VW5Yz0=\n\
          gopkg.in/check.v1 v1.0.0-20180628173108-788fd7840127/go.mod h1:Co6ibVJAznAaIkqp8huTwlJQCZ016jof/cbN4VW5Yz0=\n\
          gopkg.in/check.v1 v1.0.0-20201130134442-10cb98267c6c h1:Hei/4ADfdWqJk1ZMxUNpqntNwaWcugrBjAiHlqqRiVk=\n\
          gopkg.in/yaml.v3 v3.0.0-20200313102051-9f266ea9e77c/go.mod h1:K4uyk7z7BCEPqu6E+C64Yfv1cQ7kz7rIZviUmN+EgEM=\n\
          gopkg.in/yaml.v3 v3.0.1 h1:fxVm/GzAzEWqLHuvctI91KS9hhNmmWOoWu0XTYJS7CA=\n\
          gopkg.in/yaml.v3 v3.0.1/go.mod h1:K4uyk7z7BCEPqu6E+C64Yfv1cQ7kz7rIZviUmN+EgEM=\n\
          rsc.io/pdf v0.1.1/go.mod h1:n8OzWcQ6Sp37PL01nO98y4iUCRdTGarVfzxY20ICaU4=\n\
          ",
        },
        {
          id: "3",
          name: "server.go",
          type: Type.FILE,
          parentId: "src",
          depth: 2,
          content:
            'package main\n\n\
          import (\n\
            "context"\n\
            "github.com/gin-gonic/gin"\n\
            "go.mongodb.org/mongo-driver/bson"\n\
            "go.mongodb.org/mongo-driver/mongo"\n\
            "go.mongodb.org/mongo-driver/mongo/options"\n\
            "log"\n\
            "net/http"\n\
          )\n\n\
          var ctx = context.Background()\n\n\
          func getDB() (*mongo.Database, error) {\n\
            clientOptions := options.Client().ApplyURI("mongodb://root:pass@localhost:27017/admin")\n\
            client, err := mongo.Connect(ctx, clientOptions)\n\
            if err != nil {\n\
              return nil, err\n\
            }\n\n\
            db := client.Database("animal_db")\n\
            return db, nil\n\
          }\n\n\
          func main() {\n\
            r := gin.Default()\n\n\
            r.GET("/", func(c *gin.Context) {\n\
              c.String(http.StatusOK, "Welcome to the world of animals.")\n\
            })\n\n\
            r.GET("/animals", func(c *gin.Context) {\n\
              db, err := getDB()\n\
              if err != nil {\n\
                c.AbortWithStatus(http.StatusInternalServerError)\n\
                log.Fatal(err)\n\
              }\n\n\
              cursor, err := db.Collection("animal_tb").Find(ctx, bson.M{})\n\
              if err != nil {\n\
                c.AbortWithStatus(http.StatusInternalServerError)\n\
                log.Fatal(err)\n\
              }\n\n\
              var animals []bson.M\n\
              if err = cursor.All(ctx, &animals); err != nil {\n\
                c.AbortWithStatus(http.StatusInternalServerError)\n\
                log.Fatal(err)\n\
              }\n\n\
              c.JSON(http.StatusOK, gin.H{"animals": animals})\n\
            })\n\n\
            if err := r.Run(":5000"); err != nil {\n\
              log.Fatal(err)\n\
            }\n\
          }\n\
          ',
        },
      ],
    },
  ],
  files: [],
};
