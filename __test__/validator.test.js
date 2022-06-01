'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);


describe ("Test for validator",()=>{ 


    test("Test if everthing is OK", async ()=>{
        const response = await request.get("/person/?name=hello");
        expect(response.status).toEqual(200);
    });
    test("Test if it's not a string or empty", async ()=>{
        const response = await request.get("/person/?name=");
        expect(response.status).toEqual(500);
      
    });

    test("Test If given an name in the query string, the output object is correct", async ()=>{
        const response = await request.get("/person?name=ahmad");
        expect(response.body).toEqual({"Name":"ahmad"});
    });

    

})