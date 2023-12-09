import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
  } from "@iconscout/react-unicons";
  
  import img1 from "../../assets/images/img1.png";
  import img2 from "../../assets/images/img2.png";
  import img3 from "../../assets/images/img3.png";
  
  export const LeftSidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "Blog",
    },
    {
      icon: UilUsersAlt,
      heading: "Users",
    },
    {
      icon: UilPackage,
      heading: "Project Planning",
    },
    {
      icon: UilChart,
      heading: "Analytics",
    },
    {
      icon: UilClipboardAlt,
      heading: "Tasks",
    },
  ];
  
  export const CardsData = [
    {
      title: "React",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "React",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Angular",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Angular",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Go",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Go",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  
  export const chartData = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
  
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
  
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };
  
  export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: "has ordered Apple smart watch 2500mh battery.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      noti: "has received Samsung gadget for charging battery.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];
  
  export const customerChartData = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
  
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  
  export const NotesData = [
    {
      id: 1,
      author: "Nataliia Balabukha",
      text: "Styling in React: 4 ways to style a React app https://blog.logrocket.com/styling-in-react-4-ways-style-react-app/",
      date: "SATURDAY 16 July 2022",
    },
    {
      id: 2,
      author: "Nataliia Balabukha",
      text: "Робота з станами в Ангуляр. Збереженння стану за допомогою сервісу. /n import { Injectable } from '@angular/core'; @Injectable({ providedIn: 'root' }) export class StorageService { private dataSubject: BehaviorSubject<string> = new BehaviorSubject('initial value') data$: Observable<string> = this.dataSubject.asObservable()  setData(newValue: string) { this.dataSubject.next(newValue)}}  /n https://habr.com/ru/company/custis/blog/516290/ , https://habr.com/ru/post/439104/",
      date: "SUNDAY 17 July 2022",
    },
  ];