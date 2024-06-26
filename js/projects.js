const { createApp } = Vue;

createApp({
    data() {
        return {
            projectsContent: [
                {
                    id: 1,
                    h4: "Amir Dashboard",
                    p: "Amir Dashboard Project Design And Programming And Hosting",
                    date: "15/10/2021",
                    imgs: ["./imgs/team-01.png", "./imgs/team-02.png", "./imgs/team-03.png", "./imgs/team-04.png", "./imgs/team-05.png"],
                    data: ["Programming", "Design", "Hosting", "Marketing"],
                    price: "$ 2500",
                    width: "50%",
                    class: "red",
                    color: "#f44336",
                },
                {
                    id: 2,
                    h4: "Academy Portal",
                    p: "Academy Portal Project Design And Programming",
                    date: "15/6/2022",
                    imgs: ["./imgs/team-01.png", "./imgs/team-02.png", "./imgs/team-03.png"],
                    data: ["Programming", "Design"],
                    price: "$ 1800",
                    width: "80%",
                    class: "green",
                    color: "#22c55e",
                },
                {
                    id: 3,
                    h4: "Chatting Application",
                    p: "Chatting Application Project Design",
                    date: "15/6/2022",
                    imgs: ["./imgs/team-01.png", "./imgs/team-02.png", "./imgs/team-03.png"],
                    data: ["Design"],
                    price: "$ 950",
                    width: "90%",
                    class: "blue",
                    color: "#0075ff"
                },
                {
                    id: 4,
                    h4: "Ashraf Dashboard",
                    p: "Shraf Dashboard Project Design And Programming And Hosting",
                    date: "15/6/2022",
                    imgs: ["./imgs/team-01.png", "../imgs/team-02.png", "./imgs/team-03.png", "./imgs/team-04.png"],
                    data: ["Programming", "Design", "Hosting", "Marketing"],
                    price: "$ 1700",
                    width: "60%",
                    class: "green",
                    color: "#22c55e",
                },
                {
                    id: 5,
                    h4: "Miro Portal",
                    p: "Miro Portal Project Design And Programming",
                    date: "15/6/2022",
                    imgs: ["./imgs/team-01.png", "./imgs/team-02.png", "./imgs/team-03.png"],
                    data: ["Programming", "Design"],
                    price: "$ 850",
                    width: "70%",
                    class: "green",
                    color: "#22c55e",
                },
                {
                    id: 6,
                    h4: "Mori Application",
                    p: "Mori Application Project Design",
                    date: "15/6/2022",
                    imgs: ["./imgs/team-01.png", "./imgs/team-02.png", "./imgs/team-03.png"],
                    data: ["Design"],
                    price: "$ 950",
                    width: "40%",
                    class: "red,",
                    color: "#f44336",
                },
                {
                    id: 7,
                    h4: "Mahmoud Dashboard",
                    p: "Mahmoud Dashboard Project Design And Programming And Hosting",
                    date: "15/6/2022",
                    imgs: ["./imgs/team-01.png", "./imgs/team-02.png", "./imgs/team-03.png", "./imgs/team-04.png"],
                    data: ["Programming", "Design", "Hosting", "Marketing"],
                    price: "$ 1950",
                    width: "70%",
                    class: "green",
                    color: "#22c55e",
                },
                {
                    id: 8,
                    h4: "Mrmr portal",
                    p: "Mrmr portal Project Design And Programming",
                    date: "15/6/2022",
                    imgs: ["./imgs/team-01.png", "./imgs/team-02.png", "./imgs/team-03.png"],
                    data: ["Programming", "Design"],
                    price: "$ 1650",
                    width: "60%",
                    class: "green",
                    color: "#22c55e",
                },
                {
                    id: 9,
                    h4: "Mrmr Application",
                    p: "Mrmr Application Project Design",
                    date: "15/6/2022",
                    imgs: ["./imgs/team-01.png", "./imgs/team-02.png", "./imgs/team-03.png"],
                    data: ["Design"],
                    price: "$ 950",
                    width: "90%",
                    class: "green",
                    color: "#22c55e",
                },
            ],
        };
    },
}).mount("#projects-holder")