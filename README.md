# ossforum-node-red

OSS Promotion Forum - Application Group's IoT Project

## REST API

Endpoint: https://tailgating-checker-serve.now.sh

```
### /classify [POST]

+ Request (multipart/form-data)

        {
            "img": JPEG or PNG image,
            "speed": number
        }

+ Response 200 (application/json)

    + Body

            {
                "safety": boolean
            }
```

## Getting Started

```bash
$ git clone git@github.com:aggre/tailgating-checker-serve.git
$ cd  tailgating-checker-serve
$ npm i
```

## Development

```bash
$ npm start
```

## Deploy

```bash
$ now
> Success! Deployment ready

# Then
$ now alias
```
