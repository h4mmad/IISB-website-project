
var today = new Date();

var events = [];

var active_events = [];

var week_date = [];

var curAdd, curRmv;

function getRandom(a) {
    return Math.floor(Math.random() * a);
}

function getWeeksInMonth(a, b) {
    var c = [], d = new Date(b, a, 1), e = new Date(b, a + 1, 0), f = e.getDate();
    var g = 1;
    var h = 7 - d.getDay();
    while (g <= f) {
        c.push({
            start: g,
            end: h
        });
        g = h + 1;
        h += 7;
        if (h > f) h = f;
    }
    return c;
}

week_date = getWeeksInMonth(today.getMonth(), today.getFullYear())[2];

$(document).ready(function() {    // Add events here
    $("#demoEvoCalendar").evoCalendar({
        //format: "MM dd, yyyy",
        foramt: "dd/mm/yyyy",
        titleFormat: "MM",
        calendarEvents: [ 
        {
          id: "fancy-dress",
          name: "Fancy Dress Competition",
          date: "September/14/2021", 
          description: "Fancy Dress Competition- Tuesday", // Event description (optional)
          type: "event",
        },
        {
          id: "clay-modelling",
          name: "Clay Modelling Competition",
          date: "September/19/2021", 
          description: "Clay Modelling Competition", // Event description (optional)
          type: "event",
        },
        {
          id: "ksaday",
          name: "Saudi National Day Celebration",
          date: "September/26/2021", 
          description: `It is celebrated to commemorate the renaming of the Kingdom of Nejd and Hejaz to the Kingdom of Saudi Arabia
           by a royal decree from King Abdul Aziz Ibn Saud in 1932.
            It was made a national holiday by King Abdullah in 2005
            <a href="https://en.wikipedia.org/wiki/Saudi_National_Day" target="_blank">Learn more...</a> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/255px-Flag_of_Saudi_Arabia.svg.png">`, // Event description (optional)
          type: "event",
        },
        {
          name: "Indian Independence Day",
          date: "August/15/2021", 
          description: `Independence Day is
           celebrated annually on 15 August as a
            national holiday in India commemorating
             the nation's independence from the United
              Kingdom on 15 August 1947.
            <a href="https://en.wikipedia.org/wiki/Independence_Day_(India)" target="_blank">Learn more...</a>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png">`, // Event description (optional)
          type: "holiday",
          everyYear: true
        },
        {
          name:"Republic Day",
          date: "January/26/2021",
          description:`Republic Day is a national holiday in India, when 
          the country marks and celebrates the date on which the Constitution
           of India came into effect on 26, January 1950
           <a href="https://en.wikipedia.org/wiki/Republic_Day_(India)https://en.wikipedia.org/wiki/Republic_Day_(India)" target="_blank">Learn more...</a>
           <img src="https://gumlet.assettype.com/bloombergquint%2F2019-01%2Fdefa31f1-23ad-4bc2-8b9f-2545d6a38f71%2FCONSTITUTION_1.jpeg?auto=format&q=35&w=1200" style="height:auto;width:200px;">`,
           color: "green",
           type: "holiday",
           everyYear: true
        },
        {
          name:"Story Telling Competition",
          date: "October/13/2021",
          description:`Story telling competiton- Wednesday`,
          type: "event"
        },
        {
          name: "Sports Week",
          badge: "5-days",
          date: ["October/24/2021","October/28/2021"],
          description: "Sports Week Tentative, 24-28th October",
          type:"event"
        },
        {
          name: "Children's Day Celebration",
          date: "November/14/2021",
          description: `Children's Day is celebrated across India to increase 
          awareness of the rights, care and education of children. 
          It is celebrated on 14 November every year as a tribute to the birthday
           of India's First Prime Minister, Jawaharlal Nehru
           <a href="https://en.wikipedia.org/wiki/Children%27s_Day_(India)" target="_blank">Learn more...</a>
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jnehru.jpg/220px-Jnehru.jpg"> `,
           type:"event"
        },
        {
          name: "Arabic Recitation Competition",
          date: "January/01/2022",
          type: "event"
        },
        {
          name:"English Handwriting Competition",
          date: "February/03/2021",
          type: "event"
        },
        {
          name: "Surah Recitation Competition",
          date: "February/10/2022",
          description: `<img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Qur%27an_and_Rehal.jpg" style="height:200px;width:auto;">`,
          type: "event"
        },
        {
          name: "Ramadan Holidays",
          badge: "16-days",
          date: ["May/02/2021","May/17/2021"],
          description: `Ramadan (Arabic: رَمَضَان‎)
           is the ninth month of the Islamic calendar, observed by Muslims worldwide as a month
            of fasting, prayer, reflection and community. The predawn meal is referred to as suhur
          , and the nightly feast that breaks the fast is called iftar.
          <a href="https://en.wikipedia.org/wiki/Ramadan" target="_blank">Learn more...</a>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ramadan_montage.jpg/346px-Ramadan_montage.jpg" style="height:500px;width:auto;">`,
          color: "green",
          type:"holiday"
        },
        {
          name: "Summer Vacation",
          date: ["July/04/2021","August/26/2021"],
          badge: "54-days",
          description:`<img src="images/SummerVacation.jpg" style="width: 300px; height:auto;">`,
          type: "holiday"
        },
        {
          name: "Parent Teacher Meeting #1 (2021-22)",
          date: "June/11/2021",
          description: "Friday, 3:30-6:30 PM",
          type: "PTM"
        },
        {
          name: "Parent Teacher Meeting #2 (2021-22)",
          date: "October/15/2021",
          description: "Friday, 3:30-6:30 PM",
          type: "PTM"
        },
        {
          name: "Parent Teacher Meeting #3 (2021-22)",
          date: "December/10/2021",
          description: "Friday, 3:30-6:30 PM",
          type: "PTM"
        },
        {
          name: "Parent Teacher Meeting #4 (2021-22)",
          date: "January/28/2022",
          description: "Friday, 3:30-6:30 PM",
          type: "PTM"
        },
        {
          name: "Parent Teacher Meeting #5 (2021-22)",
          date: "March/28/2022",
          description: "Monday(Result), 8:30 AM to 12:30 PM",
          type: "PTM"
        },
        {
          name: "English Essay Writing Competition",
          date: "December/20/2021",
          description: "Monday",
          type: "event"
        },
        {
          name: "GK QUIZ (VI – XII)",
          date: "November/30/2021",
          description: "Tuesday",
          type: "event"
        },
        {
          name:"Activity KG SECTION",
          badge: "KG",
          date: "April/08/2021",
          description: "(Smiley Face) -KG SECTION",
          type: "KG"
        },
        {
          name:"Colouring Competition KG SECTION",
          badge: "KG",
          date: "September/07/2021",
          description: "Tuesday-KG SECTION",
          type: "KG"
        },
        {
          name:"Fancy Dress Competition KG SECTION",
          badge: "KG",
          date: "September/13/2021",
          description: "Monday-KG SECTION",
          type: "KG"
        },
        {
          name:"Popcorn Activity",
          badge: "KG",
          date: "February/10/2022",
          type: "KG",
          description: "Thursday-KG SECTION",

        },
        {
          name:"PT-1 Auxillary Subjects",
          date:["April/25/2021","April/29/2021"],
          description: "Class 1 to 8, Auxillary Subjects",
          type: "middle",
        },
        {
          name:"PT-1 Main Subjects",
          date:["May/23/2021","May/27/2021"],
          description: "Class 1 to 8, Main Subjects",
          type: "middle",
        },
        {
          name:"PT-2 Auxillary Subjects",
          date:["September/26/2021","September/30/2021"],
          description: "Class 1 to 8, Auxillary Subjects",
          type: "middle",
        },
        {
          name:"Term Examination (Class 9-12)",
          date:["November/07/2021","November/18/2021"],
          badge: "9-12",
          description: "Term examination for classes 9-12",
          type: "high"
        },
        {
          name: "Science/Social Science Exhibition Class(9-12)",
          date: "September/09/2021",
          description: `Day: Thursday <br>Get ready to showcase your ideas for the annual 
          science/social science exhibition!`,
          type:"event"
        },
        {
          name: "Pre-Final Exam Class(9-12)",
          date:["December/26/2021","January/06/2022"],
          badge: "9-12",
          type: "high"
        }

      ]
    })});

   
  


