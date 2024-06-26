const { createApp } = Vue;

createApp({
    data() {
        return {
            courses: [
                {
                    id: 1,
                    personImg: "./imgs/team-01.png",
                    bodyImg: "./imgs/course-01.jpg",
                    h4: "Mastering Web Design",
                    p: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
                    info: "Course Info",
                    icon: "fa-regular fa-user",
                    persons: 950,
                    dollar: "$",
                    price: 165,
                },
                {
                    id: 2,
                    personImg: "./imgs/team-02.png",
                    bodyImg: "./imgs/course-02.jpg",
                    h4: "Data Structure And Algorithms",
                    p: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
                    info: "Course Info",
                    icon: "fa-regular fa-user",
                    persons: 1150,
                    dollar: "$",
                    price: 210,
                },
                {
                    id: 3,
                    personImg: "./imgs/team-03.png",
                    bodyImg: "./imgs/course-03.jpg",
                    h4: "Responsive Web Design",
                    p: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
                    info: "Course Info",
                    icon: "fa-regular fa-user",
                    persons: 650,
                    dollar: "$",
                    price: 90,
                },
                {
                    id: 4,
                    personImg: "./imgs/team-04.png",
                    bodyImg: "./imgs/course-04.jpg",
                    h4: "Mastering Python",
                    p: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
                    info: "Course Info",
                    icon: "fa-regular fa-user",
                    persons: 950,
                    dollar: "$",
                    price: 250,
                },
                {
                    id: 5,
                    personImg: "./imgs/team-05.png",
                    bodyImg: "./imgs/course-05.jpg",
                    h4: "PHP Examples",
                    p: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
                    info: "Course Info",
                    icon: "fa-regular fa-user",
                    persons: 850,
                    dollar: "$",
                    price: 150,
                },
                {
                    id: 6,
                    personImg: "./imgs/team-02.png",
                    bodyImg: "./imgs/course-02.jpg",
                    h4: "Data Structure And Algorithms",
                    p: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
                    info: "Course Info",
                    icon: "fa-regular fa-user",
                    persons: 1150,
                    dollar: "$",
                    price: 210,
                },
                {
                    id: 7,
                    personImg: "./imgs/team-03.png",
                    bodyImg: "./imgs/course-03.jpg",
                    h4: "Responsive Web Design",
                    p: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
                    info: "Course Info",
                    icon: "fa-regular fa-user",
                    persons: 650,
                    dollar: "$",
                    price: 90,
                },
                {
                    id: 8,
                    personImg: "./imgs/team-01.png",
                    bodyImg: "./imgs/course-01.jpg",
                    h4: "Mastering Web Design",
                    p: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
                    info: "Course Info",
                    icon: "fa-regular fa-user",
                    persons: 950,
                    dollar: "$",
                    price: 165,
                },
                {
                    id: 9,
                    personImg: "./imgs/team-05.png",
                    bodyImg: "./imgs/course-05.jpg",
                    h4: "PHP Examples",
                    p: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
                    info: "Course Info",
                    icon: "fa-regular fa-user",
                    persons: 850,
                    dollar: "$",
                    price: 150,
                },
                {
                    id: 10,
                    personImg: "./imgs/team-02.png",
                    bodyImg: "./imgs/course-02.jpg",
                    h4: "Data Structure And Algorithms",
                    p: "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
                    info: "Course Info",
                    icon: "fa-regular fa-user",
                    persons: 1150,
                    dollar: "$",
                    price: 210,
                },
            ]
        };
    },
}).mount("#course")