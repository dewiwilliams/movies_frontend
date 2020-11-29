# Dewi's movie database React frontend project
This is the React frontend for Dewi's movie database

## Requirements
To run this project, you will need,
* Node. I am running Node 14.15.1, but I'm sure other versions will work as well. (https://nodejs.org/en/)
* Yarn package manager. I am running yarn v1.22.4, but I'm sure other versions will work as well. I'm sure npm will work as well.

## Building
After pulling this repository down, install dependencies,
```
yarn install
```
You will need to create a `.env` file (use the provided `.env.example` as a template).
You will need to insert the api endpoint location provided by CDK (or the AWS console) in to your local `.env` file.

To run the project, run,
```
yarn start
```