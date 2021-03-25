import { app, request } from './ConfigTest'
import Student from '../src/models/students'
import Subject from '../src/models/subjects'
describe('App Tests', () => {


    // Before each test we empty the database

    beforeAll(async() => {
        Student.deleteMany({}, (err) => {

        })
        Subject.deleteMany({}, (err) => {

        })
    })

    //Prepare the Student data for the test

    var student = {
        "_id": "6009c90d498eb2e23180c618",
        "name": "Sakib Hasan",
        "email": "sakibhasan9641@gmail.com",
        "phone": "01763553147",
        "Dateofbirth": "1-12-1999"
    }

    //Prepare the Subjects data for the test

    var subject = {
        "_id": "6009c90d498eb2e23180c610",
        "name": "Sakib Hasan",
        "student": "6009c90d498eb2e23180c618"
    }

    /*
     * Test the student /POST Router
     */

    describe("Create Student with Empty body ", () => {
            test("is should send validation error for save student", () => {
                request(app)
                    .post("/api/student")
                    .send()
                    .set('Accept', 'application/json')
                    .expect(404)
            })
        })
        /*
         * Test the student /POST Router
         */
    describe("Create Student ", () => {
        test("is should post a new student", () => {
            request(app)
                .post("/api/student")
                .send(student)
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json')
                .expect(201)
        })
    })


    /*
     * Test the student /GET Router
     */
    describe('All Student', () => {
        test('it should get  Students with books', async() => {
            request(app)
                .get('/api/students')
                .expect(200)
        })
    })

    /*
     * Test the Subject /POST Router
     */
    describe("Create Subject with Empty body ", () => {
            test("is should send validation error for save Subject", () => {
                request(app)
                    .post("/api/subject")
                    .send()
                    .set('Accept', 'application/json')
                    .expect(404)
            })
        })
        /*
         * Test the Subject /POST Router
         */

    describe("Create Subject ", () => {
        test("is should post a new Subject", () => {
            request(app)
                .post("/api/subject")
                .send(subject)
                .set('Accept', 'application/json')
                .expect('Content-Type', 'application/json')
                .expect(201)
        })
    })

    /*
     * Test the Subject /GET Router
     */

    describe('Get Subject ', () => {
        test('it should get  Subject with student name', async() => {
            request(app)
                .get(`/api/subject/${subject.student}`)
                .expect(200)
        })
    })



})