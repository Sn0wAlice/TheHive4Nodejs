# TheHive4Nodejs
Nodejs module to interact with your TheHive5 instance

<p align="center">
    <img src="./.github/logo.png">
</p>

> this repos is not stable yet

## TheHive5: 
TheHive is a scalable security incident response platform, closely integrated with the Malware Information Sharing Platform (MISP), designed to make life easier for PSCs, CSIRTs, CERTs and any information security professionals dealing with security incidents that require investigation and prompt response.

1. site web: [https://thehive-project.org/index.html](https://thehive-project.org/index.html)
2. nouveau site web: [https://www.strangebee.com/](https://www.strangebee.com/)
3. blog: [https://blog.strangebee.com/](https://blog.strangebee.com/)

> Need 4 core & 8go ram for a good process

## Known issues
- documentation type does not match
- some functions can show error without explication
- function that upload / download file can't work due to header error

i will patch all of these as soon a possible


# Contributors: 
- [Sn0wAlice](https://github.com/Sn0wAlice)



# Docs

> good luck 🥹

- Class [Click here to see the class doc](./docs/class.md)

# Utils

> don't forget to execute `npm i thehive4nodejs` before using a utils script

## Deploy a new thehive: 

> yep you can deploy a thehive instance with a single nodejs simple script :)

Example script can be find in: `./examples/deploy-thehive-*.js`

### deploy-thehive.js
This script will just install / update a docker version of thehive instance.