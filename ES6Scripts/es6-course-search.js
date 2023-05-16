const courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    }, {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    }, {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    }, {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    }, {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
]


// When does the PROG200 course start?
function findPROG200(course) {
    return course.CourseId === "PROG200";
}
const prog200 = courses.find(findPROG200)
console.log("PROG200 starts on ", prog200.StartDate);
//--------------------------------------------------//


// What is the title of the PROJ500 course?
function findPROJ500(course) {
    return course.CourseId === "PROJ500";
}
const proj500 = courses.find(findPROJ500)
console.log("Title of PROJ500 ", proj500.Title);
//--------------------------------------------------//


// What are the titles of the courses that cost $50 or less?
function findCourses50orLess(courses) {
    return Number(courses.Fee) <= 50;
}
const courses50orLess = courses.filter(findCourses50orLess)
console.log('Courses under $50');
for (const courses of courses50orLess) {
    console.log('$', courses.Fee, courses.Title);
}
//--------------------------------------------------//


// What classes meet in "Classroom 1"?
function coursesInClassroom1(courses) {
    return courses.Location === 'Classroom 1';
}
const allclassesInClassroom1 = courses.filter(coursesInClassroom1);

console.log('Courses in Classroom 1:');
for (const course of allclassesInClassroom1) {
    console.log('', course.Title)
}
