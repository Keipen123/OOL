import DataBaseEvents from './mutations'

export default{

    mutations:DataBaseEvents,
    
    state(){
        return{
            friendPoint:0,
            lovePoint:0,

            arrayCounter:0,
            partNumber:0,

            oneStatus:false,
            bgStatus:true,
            characterStatus:false,
            
            oneCode:1,
            bgCode:101,
            characterCode: 201,

            modalStatus:false,
            littleStatus: false,

            userChoice:[],

            choiceOptions:[
                [   1,
                    'How do I want to hang out with friends?',
                    'Sing karaoke',
                    'Play games',
                    'Play Tag',
                    'Go shopping',
                ],
                [   2,
                    'What kind of video do I often watch?',
                    'Idol Music Video',
                    'Cute animal clips',
                    'Cooking channel',
                    'Standup comedy',
                ],
                [   3,
                    'What is my favorite subject?',
                    'Science',
                    'Japanese literature',
                    'Social Studies',
                    'Math',
                ],
                [   4,
                    'Psychology test',
                    'favorite coffee',
                    'expensive notebook',
                    'delicious cake',
                    'fancy letter set',
                ],
                [   5,
                    'Who to be with next weekend?',
                    'ONE',
                    'Sean',
                    'ONE and Sean',
                    'Everyone',
                    'alone',
                    'give the ticket to Sean and ONE'
                ]
            ],

            textDialogue:[
                
                ///Part0///
                [
                    101,
                    "My name is {Akita Sugita}. After this spring break, I'll be a freshman at AIU Academy.",
                    "'Ichi ni, Ichi ni'.",
                    "Right now, I'm doing my daily routine of running. I've been doing it since junior high school, and I'm secretly proud of the fact that I'm a regular runner unless it rains heavily.",
                    "俺　'Good morning, ONE.'",
                    0,
                    "ONE: ……",
                    "ONE is a mascot costume in the park that I use as my running course. According to the explanation plate attached to the glass case, it's an Akita dog fairy. It has a very cute face, so I greet it whenever I pass by. Well, there's no way I'll get a reply...",
                    0,
                    "Anyway, I guess I'll just have to work a little harder!",
                    "I start running again.",
                    100,
                    100,
                    "I: “Ichi ni, Ichi ni'",
                    "It's the long-awaited entrance ceremony for my high school today. I came here for my routine morning run so as not to get nervous, but I was still somewhat fidgety.",
                    "俺'Good morning ONE...... Huh?'",
                    57,
                    "The glass case is empty. What's going on? Did someone steal it? No way. I don't think a mascot costume is worth that much.",
                    "Then, what the hell happened to ONE ......",
                    "俺'Oops.'",
                    "I want to think about it, but I'm going to be late. First, let's get ready for school.",
                    100,
                    102,
                    100,
                    "This is my new school, AIU Academy. I hope it will be a fun three years.",
                    "?? 'Hey, Sugita!'",
                    "俺, 'Sean!'",
                    200,
                    "Sean is from the same junior high school as me, and he's my best friend.",
                    "Sean: 'Now that I've met Sugita, there's only one left.'",
                    "Hmm? I think Sean and I are the only ones who go to this high school from the same middle school. I don't remember knowing anyone else.",
                    "?? 'Sugita! Sean!'",
                    "俺 'ONE!?'",
                    0,
                    "What the hell is going on? That big green dog is standing right in front of me, talking!!",
                    "Sean: 'Hi, ONE! How are you?'",
                    "ONE 'Yeah. You're still the same, Sean.'",
                    "What the heck! My best friend and a stuffed animal are talking in front of me",
                    "Sean: 'What's with the weird look on your face, Sugita? Isn't ONE a friend?'",
                    "What do you mean, 'friend'? You’ve never seen ONE!",
                    "俺 'ONE!　You're ONE?　I know you've been gone from the park, but really!",
                    "ONE standing",
                    "ONE: 'Yeah. I was just curious about the high school life of human beings. So I decided to join you guys. Don't worry, thanks to my fairy powers, no one but you will think I'm strange.'",
                    "...... It's hard to believe. But when you see that no one, including Sean, seems to panic at the sight of the giant green dog, you have to believe it.",
                    "Sean: 'Hey, what are you two whispering about?'",
                    "ONE 'I'm coming! Let's go to the classroom. Homeroom is about to start.'",
                    "ONE's short, fluffy arm pulls my hand as I'm still trying to understand what's going on.",
                    "This is how my strange high school life began.",
                    999
                ],

                ///Part1///
                [
                    103,
                    "It has been a few days since the start of high school life. The new students have a lot to learn and are still getting used to their new school.",
                    "Speaking of not getting used to ......",
                    "ONE '{Sugita}~'",
                    0,
                    "The presence of ONE. Since the entrance ceremony, ONE has blended in uncomfortably as a member of the class. ONE later explained to me that in their eyes, ONE is seen as a dog. But they can't recognize that as strange.",
                    "...... Fairies are amazing.",
                    "ONE: 'Sugita, let's have lunch together.",
                    "Me: 'Yeah.'",
                    "But aside from being a green dog, ONE is no different from any other classmate. We're still having lunch together.",
                    "Then Sean came in.",
                    200,
                    "Sean : 'Oh, there you are, Sugita. You were called by the teacher in the staff room earlier.",
                    "I : 'Really?　Then I have to go.",
                    "Sean 'I've been called too. I'll go with you.'",
                    "I : so I went out into the hallway with Sean.",
                    0,
                    104,
                    "Sean: 'How's it going at ......?'",
                    "I : 'How about what?'",
                    "Sean 'Don't be silly, it's ONE. You and that guy have a good vibe, right?'",
                    "What do you mean !?",
                    "I : 'Sean! Don’t tease me'",
                    "Sean: 'Don't be shy. Don't be embarrassed, you guys are much closer than before.'",
                    "No, not before, I couldn't even have a conversation with ONE until a week ago. ...... But there was no point in saying this to Sean, who was convinced that Sugita and ONE had always been good friends. I shook my head vehemently.",
                    "I : 'Anyway, it's not like that.'",
                    "Sean : 'Hmm. Well, that's what I'm going to say. But if you want to get to know ONE, I'm always willing to help.",
                    "Sean: 'By the way, it's not true that the teacher called me, so go back to ONE.",
                    "And with that, Sean was gone.",
                    "Oh man, I'm in trouble with my strange intuition. One is not a human being in the first place......",
                    200,
                    103,
                    0,
                    "ONE: 'Welcome back~'",
                    "The ONE sitting on the floor is a stuffed animal costume, no matter how you look at it.",
                    "ONE: 'I was eating dinner with everyone. Wanna join?'",
                    "I : 'Thanks'.",
                    "I sat in the circle of my classmates. Lunch is delicious when eaten while chatting with others.",
                    "Classmate A: 'Hey, do you want to hang out with us sometime?",
                    "Classmate B: 'That sounds great!　Let's go to karaoke or the arcade.",
                    "ONE: 'Sounds fun! What do you want to do, Sugita?'",
                    "Me: 'Let's see... ......'",
                ],

                ///Part2///
                [
                    "A few weeks have passed since I started school.",
                    "We've been playing together, and I've gotten to know everyone in my class.",
                    "And I'm getting used to seeing the newly changed ONE",
                    
                    "I guess you could say we're off to a pretty good start in high school.",
                    "Today, I've come to a diner after school to do something more like a high school student.",
                    "ONE seems to be very excited to go to a diner for the first time.",
                    "ONE: 'Is this what’s called carbonated? It's delicious!",
                    "ONE wags his tail happily and enjoys the drink bar.",
                    "Sean, on the other hand, glanced at his smartphone earlier and stared at the screen with wide eyes.",
                    "He looks serious, but since he's this guy, I'm sure it's ......",
                    "ONE: 'Sean, what's wrong? I keep seeing that.'",
                    "Sean says, 'I'm sorry, I'm sorry,' and puts his phone away.",
                    "Sean: 'I've been waiting for the trailer for the animated remake of 'The Three Felons of the Hidden Fortress' to come out. I got carried away.'",
                    "I knew it. It was new information about the anime.",
                    "I : 'Sean loves anime and movies.",
                    "Normally, Sean is not a tactful person who gets absorbed in his phone while in the company of friends. But when it comes to anime, it's a different story.",
                    "I : 'It's not uncommon for him to be on the Internet all the time forgetting to hang out with me.",
                    "ONE 'Haha, you like it so much.",
                    "Sean: 'Well, yeah.",
                    "Sean smiled embarrassedly.",
                    "ONE 'I don't watch a lot, so I don't know what kind of stuff is funny.'",
                    "ONE 'What about Sugita? What kind of videos do you watch?'",

                ],

                ///Part3///
                [
                    "教室",
                    "More than a month has passed since I started my high school life.",
                    "I've gotten to know everyone in my class, but the one I'm closest with the most is probably the ONE.",
                    "It may sound strange to be classmates with a dog fairy, but once you get used to it, there's nothing strange about it. They are having a good time just like any other high school students.",
                    "......, but it's not all fun and games at school.",
                    "Teacher: , 'So, midterm exams are coming up soon. Make sure you study hard.",
                    "A sigh escaped from the entire class. The word 'exam' always makes students feel heavy-hearted.",
                    "Classmate: 'Hey, Sugita. Why don't we stay in the classroom after school and have a study session?　Both ONE and Sean said they'd join us.'",
                    "I : 'Of course! Thank you for inviting me.'",
                    "Classmate: 'Great! We were talking about teaching each other subjects we're good at, what are you good at?'",

                ],

                ///Part4///
                [
                    "チャイムの音",
                    "教室",
                    "It's been a week since the midterm examinations ended. The sense of release from the exams and the atmosphere of sorrow and joy over the scores have disappeared from the classroom, and the usual days has returned.",
                    "Sean :'Hey, Sugita, ONE'.",
                    "It was lunchtime,  Sean took out a book.",
                    "Sean: 'I borrowed it from the library a while ago. Would you like to try it?'",
                    "The cover was shiny and decorated with silver lame. The title is 'You'll Never Guess!　Psychological Test 100 Questions'.",
                    "I : '......'.",
                    "How can you find a book like this ......?",
                    "ONE: 'What's a psychological test?'",
                    "Sean: 'Oh, you've never done one before? Just by answering a few seemingly unrelated questions, you can find out a lot about a person's personality, thoughts, etc.'",
                    "ONE 'Oh my God!I didn't know there was such a thing.",
                    "Sean: 'Let's just try one question.",
                    "ページをめくる音",
                    "Sean :'In your dream, you were walking in a meadow and you met an animal. What is the animal? 1. dog 2. cat 3. goat 4. sheep.'",
                    "ONE: 'Out of those, I'd like to meet a dog.'",
                    "Sean: 'If you chose a dog, you are very active!　You are the type of person who spends their holidays outdoors.'",
                    "ONE 'You're right! I love parks and forests! This book is amazing!",
                    "ONE is impressed with the book ......",
                    "Sean: 'Okay, next question. This time, let's have Sugita answer.'",
                    "",
                    "ページをめくる音",
                    "Sean: 'You are going to buy yourself a present. What would you buy from the following list?　1. your favorite kind of coffee beans 2. an expensive notebook 3. Delicious cake 4. Stylish letterhead and envelopes'",
                    "I : 'Am I going to answer too? Well, I do. ......'",

                ],

                ///Part5///
                [
                    "リビング",
                    "One night. We were having dinner as a family, and my mom said, 'Oh, yes! and brought me something.",
                    "My mother : 'Sugita. Do you want this?'",
                    "What she gave me was an invitation to a movie screening. It was a movie directed by a famous animation film director, and it was about a summer romance between high school students.",
                    "My mother : 'I got this through work, but I heard it's popular among young people. Why don't you go and invite your friends?",
                    "I : 'Thank you.",
                    "",
                    "教室",
                    "The preview of the movie will be held this weekend. Who should I invite?",
                    "ONE立ち絵",
                    "ONE will definitely be excited. I'm sure he's never seen a movie before, and if I tell him it's popular among human high school students, he'll want to see it.",
                    "ショーン立ち絵",
                    "Sean will want to go, too. I think he said he's seen all of this director's films. Even if there's no preview, he'll go see it after it comes out.",
                    "It's not just the two of us, we can also invite other friends. We have five invitation tickets, so we can invite five people. It would be fun to see the movie together and talk about it.",
                    "However, there is also the option of going alone. It would be interesting to watch the movie on your own.",
                    "However, I'm not that interested in this movie. If that's the case, I might as well give it away to someone who wants to see it.",
                    "Now, what should I do?",

                ],

                ///6 / karaoke///
                [   
                "I: 'It's popular, then karaoke is probably good.",
                "ONE: 'Karaoke, huh? I've never been.",
                "Classmate A: 'Oh, you've never been?",
                "Classmate B: 'Then let's do karaoke!　It's ONE's karaoke debut!",
                "In a few minutes, we decided to go to karaoke with about 10 people.",
                "ONE: 'I've never done karaoke before, I'm looking forward to it!　I have to practice singing...",
                "I: 'You don't need to prepare. Even if you're not a good singer, karaoke can be fun if you sing along to other people's songs. If anything, you just need to be prepared to have fun and get along.'",
                "ONE 'The feeling of having fun: ......'",
                "人間化0→1イベント",
                "背景カラオケ",
                "The day of karaoke",
                "It was a little strange to see ONE who had become a little more human, but",
                "ONE: 'Oh, that was fun! Sean is a good singer, isn't he?'",
                "By the time the karaoke was over, I was completely used to it.",
                
                ],

                ///7 / game///
                [   
                "I : 'Why don't we play a game together? There are some games I'd like to play with a big group.",
                "Classmate A: 'Oh, that's a good idea!",
                "After a while, we decided to have a game tournament after school.",
                "",
                " After school",
                "Classmate A: 'Pfff. Actually, I'm the werewolf!",
                "I: 'No way!",
                "My team screamed in unison. I've been beaten spectacularly. I'm completely defeated by her team.",
                "Classmate A: 'We did it, ONE!'",
                "ONE: 'Yes! I'm glad my plan worked out!'",
                "She and ONE are gut-punched and happy.",
                "When I calculated my score earlier, I found out that I lost badly to ONE. I'm so bummed.",
                "...... Well, it doesn't matter if you win or lose, it's fun.",
                
                ],

                ///8 / tag///
                [
                    "俺「あえての鬼ごっことかかくれんぼとかやりたくないか？」",
                    "I: 'Why don't we play tag, or hide-and-seek?",
                    "Classmate A: 'We’re in high school, Sugita!",
                    "Classmate B: 'Well, it sounds fun, but...'",
                    "Classmate C: 'I'm not good at sports, so I guess I'll pass. ......",
                    "Oh, the reaction is worse than I thought.",
                    "I:  'Sorry, I just thought of something.",
                    "I see, everyone in high school doesn't play outside anymore. ......",
                    "In the end, we all decided to go to karaoke. It's true that karaoke is much more like high school than playing tag in the park. But it's fun to play tag. ......",
                    "ONE '{Sugita}'",
                    "After we decided on the details and call it, ONE poked me with his tail",
                    "ONE: 'I wanted to play tag with you. I'm a dog fairy!'",
                    "I : 'I see. Thank you, ONE.",
                    "ONE: 'Let's play tag sometime.",
                    "ONE's smile gave me a little courage.",
                    
                ],

                ///9 / mall///
                [   
                "I : 'How about a shopping mall? There's a game center and a food court.'",
                "Classmate B: 'I used to go there a lot during spring break, so I'll leave it to you to show me around. There were a lot of couples there, though.'",
                "Classmate A: 'It's a very popular place as a date spot, isn't it?  Anyway, it doesn't matter much. We're going in a group.",
                "Classmate B: 'Right.",
                "After a few minutes, we decided to go to a shopping mall.",
                "ONE: 'A date spot, huh? Have you ever been on a date, Sugita?'",
                "I : 'Unfortunately, no. ......'",
                "I've never had many romantic things in my life.",
                "ONE 'Me too. So this will be a preview for a future date.",
                "I : 'May that preview come in useful one day. ......'",
                "If I don't get someone to date in high school, ...... no, I'll stop thinking about it.",
                "ONE: '...... Yeah. I have to start preparing myself the best I can.",
                "I : 'Did you say something, ONE?",
                "ONE 'No, nothing!'",
                "I thought I heard ONE mumbling to himself, but I was mistaken.",
                "Anyway, let's all look forward to going to the shopping mall together!",
                
                ],

                ///Idol MV///
                [
                "I: 'I guess I watch a lot of idol music videos. I like this group quite a bit.'",
                "And I played the music video of my favorite idol, Bow-Wow Girls. You can enjoy cool song with a pop and acrobatic dance moves.",
                "Sean: 'Huh, it’s good.'",
                "I: 'Right?'",
                "Sean seemed to like it. ONE said, '......",
                "ONE '......'",
                "He was staring at the screen with a very serious face. It's hard to get this look when you're watching an idol's music video. ......",
                "ONE '...... I see. So this is the kind of thing you like.'",
                "I: 'Huh?　Well, I do like it.",
                "ONE: 'Okay. Thank you.'",
                "I don't know what it was, but it seems to have been resolved.",
                "After that, the three of us spent the rest of the day chatting happily.",

                ],

                ///Pet Video///
                [  
                "I: 'I often watch pet videos. Like this one.'",
                "My favorite is a video of a large dog and its owner playing Frisbee in a large field. Videos of animals playing energetically give me happiness.",
                "Sean: 'I like these videos, too. It's soothing.'",
                "Sean seemed to like it. ONE can be found at ......",
                "ONE '......",
                "He was staring at the screen with a very serious face. That's not good. Was it a bad idea to show the dog fairy a video of a dog being turned into a pet? ......",
                "I:, 'Um, ONE?　I'd like to apologize if I offended you. ......'",
                "When I whispered this, ONE looked back at me with a puzzled look on his face. Hmm? No?",
                "After I explained, ONE laughed and said, 'I see'.",
                "ONE: 'I like to see humans and dogs getting along, at least I personally do. The reason he looked so serious was because he was happy. I was happy that Sugita liked dogs.",
                "Of course I'm a dog lover. More specifically, I like any animal like dogs, cats...whatever.",
                "So it was only natural for me to like dogs, but I was happy that ONE was happy about it.",
                "The rest of the day was spent watching Sean's and my favorite animal videos",
                
                ],

                ///mcooking vid///
                [
                "I: 'I like cooking videos. I watch all kinds of cooking videos, from trendy cooking to survival food.",
                "Sean: 'Sugita is a good cook'",
                "I feel a little embarrassed when I'm praised",
                "ONE 'Wow, that's great!'",
                "Sean: 'Yeah. In junior high school, all the girls wanted to learn how to cook before Valentine's Day.",
                "I: 'Stop talking about it…!'",
                "I was happy to teach them, but all I got in return were only 'thank you' things, not a single telling of love…",
                "As I'm shaking off the sad memories, ONE is looking at my hand.",
                "ONE '...... should I be able to cook too?'",
                "Sean: 'I think it's good! Good cooks are popular with both men and women.",
                "I : 'Whether you're popular or not, why don't you give it a try?'",
                "I don't know if those round hands can handle a knife, but ...... cooking with fire is a human privilege. It would be a good experience to try it out.",
                "ONE 'Yes!　Let me know when you do, Sugita.'",
                "I: 'Sure.'",
                "We spent the rest of the day talking about cooking.",
                ],

                ///Stand-Up Comedy///
                [
                "I : 'I often watch comedian's videos. I'm a fan of this duo.'",
                "The young comedian duo Pochi & Buchi is one of the most popular comedians right now, with their light-hearted talk and witty comedy.",
                "I showed them a video that was just released yesterday.",
                "Sean: 'Ahahahaha! That's funny.",
                "ONE: 'Yeah!",
                "They both laughed and laughed.",
                "I : 'It's funny, right?",
                "ONE 'Yes. It was really interesting. Thank you for showing me a new world.'",
                "We spent the rest of the evening showing each other funny videos.",
                
                ],

                ///Science///
                [
                "I : 'I'm good at science. Especially chemistry.'",
                "Classmate: 'I see. I think ONE also said he was good at science, though it was biology.",
                "Ah hah. It's true that ONE, the Akita Dog Fairy, knows more about living things and plants than the others.",
                "Classmate: 'See you after school then.",
                "Me: 'Yeah.",
                "",
                "At The empty classroom after school, the class huddles around their desks and spreads out their textbooks. We individually work on textbooks, and if we don't understand it, we ask someone who is good at that subject.",
                "In the beginning, everyone was working hard, but gradually they started to run into problems they didn't understand, and questions started to pop up.",
                "Oh, I don't understand biology either. ......",
                "I : 'ONE, about this problem: ......",
                "ONE: 'First of all, if you look closely at the diagram, you'll see that this is ......, so the correct answer is B.'",
                "I : 'Oh, I see!",
                "ONE has a wealth of knowledge about nature and answers every question in an easy to understand manner.",
                "I : 'You’re amazing, ONE.",
                "ONE 'Ehehe. Studying is fun. I get a good explanation for things you've only vaguely understood from what I experienced in nature. It's really interesting!",
                "Looking at ONE’s smiling face, I felt ashamed of myself for being so bad at studying for exams.",
                "I'm going to have to do my best with .......",
                "One: 'Now, it's your turn. Chemistry and biology are interesting because they are connected, but they are still difficult. ......'",
                "Me: 'If it's okay with me, you can always ask.'",
                "Classmate: 'Oh, wait. I didn't understand that problem either!",
                "Sean: 'Count me in!",
                "At this rate, I'll be able to study happily until the exam.",
                
                ],
                
                //Reading//
                [
                    "I: 'Japanese, I guess. I think I can do reasonably well in Old-Japanese and Old-Chinese.",
                    "Classmate: 'Oh, that's great. I'm counting on you. See you after school.'",
                    "I : 'Yeah.",
                    "",
                    "At The empty classroom after school, the class huddles around their desks and spreads out their textbooks. We individually work on textbooks, and if we don't understand it, we ask someone who is good at that subject.",
                    "In the beginning, everyone was working hard, but gradually they started to run into problems they didn't understand, and questions started to pop up.",
                    "ONE: 'Ugh, what are ancient Chinese sentences? I'm going to hate it. ......'",
                    "The ONE sitting next to me also groaned and plopped down.",
                    "I : 'Please don't hate it. It's my best subject.'",
                    "I whispered in a low voice",
                    "I: 'Since you're a fairy, I'm sure you've lived a long time, haven't you?Can't you read ancient texts or something?'",
                    "ONE: 'It's only recently that the Akita breed was established...... I don't know much about the ancient time.",
                    "It seems that fairies are not all-powerful either.",
                    "Classmate: I'm not sure how you can remember such complicated grammar and vocabulary,' My classmate, who was also struggling with the ancient texts, sighed",
                    "I : 'I like reading ancient texts. I like reading ancient texts because reading the words means knowing the people who lived in that era. I feel that if you know the past, you can know the people of today.",
                    "When will I know the difference between the thoughts of people a thousand years ago and the thoughts of people living today? It is always interesting to know the difference between them.",
                    "ONE '......",
                    "ONE raised his face and opened the textbook again.",
                    "I : 'Retry?'",
                    "ONE 'Yes. Since I can speak the modern human-beings language, I'll try to touch on the old human-beings language as well. That will help me get to know Sugita and the others, right?'",
                    "I : 'At least I think so.'",
                    "The ONE nodded quietly.",
                    "I : 'If there's anything you don't understand, just ask. I'll teach you everything I know.'",
                    "ONE: 'You too, Sugita. I know you've been avoiding studying biology because you're not good at it!",
                    "Ugh, I was trying to forget about biology. ......",
                    "But at this rate, I'll be able to study happily until the exam.",
                    
                ],

                //Social studies//
                [
                "I : 'Society, I guess. I think I can do pretty well in Political Science and Economics.",
                "Classmate: 'Okay. I haven't found anyone who's good at Political Science yet, so that's great. See you after school.'",
                "I : 'Yeah.",
                "",
                "At The empty classroom after school, the class huddles around their desks and spreads out their textbooks. We individually work on textbooks, and if we don't understand it, we ask someone who is good at that subject.",
                "In the beginning, everyone was working hard, but gradually they started to run into problems they didn't understand, and questions started to pop up.",
                "ONE 'Sugita, how should I think about this problem?",
                "I : 'This one is all about reading the graph. First of all, the vertical axis here is ......, so the correct answer is C.'",
                "ONE 'I see! You’re amazing, Sugita. I don't understand anything about Politics or economics......'",
                "It's true that the political system and economic theories would make no sense to ONE, who has suddenly arrived in human society.",
                "ONE: 'It's something I can't do, so I thought it was cool that you solved it so smoothly.",
                "I : 'Thank you. I'm kind of embarrassed.",
                "I feel a little embarrassed because it's not often that I get a compliment from a friend face to face.",
                "...... Yes, I'm embarrassed because my friend gave me a compliment.",
                "It's natural to be embarrassed by a compliment from a 'friend'. ......",
                ],

                //math
                [
                "I : 'If I had to say, I'd say math, but don't get your hopes up.",
                "Classmate: 'Math! I'll be grateful if you're there. I'll see you after school.'",
                "I:, 'Yeah.",
                "",
                "At The empty classroom after school, the class huddles around their desks and spreads out their textbooks. We individually work on textbooks, and if we don't understand it, we ask someone who is good at that subject.",
                "In the beginning, everyone was working hard, but gradually they started to run into problems they didn't understand, and questions started to pop up.",
                "Classmates: 'Sugita, help me!　I don't know even where to start!",
                "I : 'Oh, you'll have to get a little creative to get to the formula, won't you? First, go to .......'",
                "Sean: 'Sugita! Oh, you aren’t available...then how should I tackle Question 4?",
                "ONE: 'I've solved that one.",
                "What I didn't expect was that ONE could do a bit of math. It's a subject that is often listed as one of his weaknesses even among human beings",
                "I : 'Wow, ONE, this is your first time studying it, isn't it?'",
                "ONE: 'Yes. But math is a logical system. It's easy to understand.'",
                "...... Sounds like something a person who's not good at math would have a stroke over if they heard it.",
                "Anyway, it's almost time for the exam, let's do our best to keep up with ONE!",
                
                ],

                ///Coffee///
                [
                "I : 'If it's one of those, I'll choose coffee beans. I like it.'",
                "Sean: 'If you choose coffee beans, you are satisfied with your current life!　You don't want to start something new or meet new people.' .",
                "I:, 'That's right. I'm happy with my life at AIU Academy. It's fun to hang out with Sean and One.'",
                "Sean: 'Damn!You make me so happy.'",
                "ONE: 'Thanks, Sugita.Well, psychological tests are amazing, It never makes mistakes...'",
                "I :'Haha. But most of them are like games without any scientific basis.",
                "ONE: 'Still, even if the hidden meaning is wrong, if you can genuinely ask a question and hear the answer, you can get to know the person, right?",
                "Mmm, I see.",
                "Sean: 'Anyway, let's continue.",
                "ONE :'I want to hear Sean's answer this time!",
                "Sean: 'Okay. Then ONE pick a question for me.'",
                "We spent the rest of the day happily reading psychological test books",
                
                ],

                ///Notebook///
                [
                "I : 'I'm out of notebook stock right now, so maybe a notebook.",
                "Sean: 'Don't answer that way, think more romantically. ...... Well, 'If you chose a notebook, and you're looking for new friends. You wish to change your boring life through stimulating interaction.'",
                "I : 'Hmmm, really? At least I'm happy with the status quo. I feel like I'm getting enough inspiration from Sean and ONE.'",
                "Sean: 'Damn! That's so nice of you to say.",
                "ONE: 'Yes, thank you {Sugita}. But the test was not correct...?",
                "I :'Psychological tests are usually just for fun, with no scientific basis.",
                "ONE 'I see. I guess it's impossible to uncover someone's mind with just one or two questions.",
                "Sean: 'Yeah, but it's fun if you treat it as a game.",
                "ONE: 'Yes, it is. So, now I want to hear Sean's answer!",
                "Sean: 'Okay. Sean: 'Okay, then you choose the questions!",
                "After that, we spent the rest of the day happily reading a book about psychological testing.",
                
                ],
                ///Cake///
                [
                "I : 'I'm in the mood for something sweet, so I'll have a cake.",
                "Sean: 'Cake, um ...... 'If you chose cake, you probably have someone you like! Even if you're not aware of it, deep down there's someone you're attracted to.' What do you think, are you aware of it?'",
                "I : 'Someone attracted to .......'",
                "A memory from a few months ago comes back to me.",
                "Past Sean: 'It's ONE. You and that guy seem to be in a good mood, don't you think?",
                "At the time, I thought that Sean had misunderstood me. In fact, from then until now, ONE and I have been good friends, and I intend to ......",
                "I : '...... No, I don't know anything about that. Anyway, psychological testing is a game with no scientific basis to begin with.",
                "Sean: 'Oh, you got away! That's not fair, answer the question honestly!",
                "I : 'Shut up!If that's the case, I'll give you psychology tests about romantic affairs too. Just answer honestly, okay?'",
                "Sean: 'Of course. I'm not like someone else, I'm not going to run away like a coward!",
                "あれば不安な顔or何かを期待する顔",
                "ONE「……」",
                "人間化イベント",
                ],

                ///Letter Set///
                [
                "I : 'Letterhead and envelopes? I don't have anything very nice.'",
                "Sean: 'OK. The letterhead and envelopes are from ......' You're looking for something new in your daily life!Whether it's a hobby, a study, or a romantic partner, you want to meet new things and grow.'",
                "I : 'I appreciate meeting new things. But I think my current school life is stimulative and fun enough.",
                "It's the first time in my life that I've made friends with an Akita dog fairy.",
                "Sean: 'Oh, so you're satisfied with your current situation and don't want a girlfriend?",
                "I : 'No, I'm not saying that.",
                "I want one if I can. I'd like to have someone ...... with whom I can make exciting and fun memories.",
                "ONE '......'",
                "Me: 'Come on, ask the next question rapidly!'",
                "Sean: 'Oh, you're embarrassed, aren't you?'",
                "I : 'Shut up, you answer the next one.",
                "We spent the rest of the time asking each other psychological test questions.",
                
                ],

                ///Only One///
                [
                "...... Okay, let's just ask ONE out.",
                "I : 'Hey, ONE, do you want to go see a movie this weekend?'",
                "ONE: 'A movie? I'm going for the first time! I'm looking forward to it! Who else is coming?'",
                "I : 'Well, we're both going to .......'",
                "ONEびっくり顔",
                "I : 'Well, you can invite Sean and some other friends if you want to. ......",
                "ONE笑顔",
                "ONE「Yeah, I’d like to」",
                "I: Okay, I'll see you at the station on Sunday at 2:00.",
                "",
                "人間化イベント",
                "",
                "映画館",
                "拍手の音",
                "ONEの立ち絵",
                "",
                "繁華街",
                "ONE: 'That was a fun movie, wasn't it?'",
                "Me 'Yeah'.",
                "ONE 'But I got stiff from sitting all the time.'",
                "ONE 'But I'm so stiff from sitting all the time.",
                "I : 'Then, why don't we go for a walk? Let's go to the park where ONE was.'",
                "ONE笑顔",
                "ONE 'Yeah!!",
                "",
                "",
                "夕方の公園",
                "公園の環境音",
                "Even though it was just after the summer solstice, the sun had already set and the park was bathed in red light.",
                "One and I were walking slowly along the park path.",
                
                ],

                ///Only Sean///
                [
                "Okay, let's ask only Sean out.",
                "I : 'Hey Sean, do you want to go see a movie this weekend? I got an invitation to see a screening of the latest movie by the director you said you liked.",
                "Sean: 'Wow, that's great! What you have is a friend! And you're with ONE, right?",
                "I : 'No, just us. I:, 'No, just us. It's nice to have two guys around sometimes.",
                "Sean looked a little surprised, but he quickly smiled and said, 'Okay.",
                "I : 'Okay, I'll meet you at the station on Sunday at 2:00.",
                "",
                "映画館",
                "拍手の音",
                "ショーンの立ち絵",
                "",
                "繁華街",
                "Sean 'That's the director. You did an amazing job directing this movie. But I didn't want that scene to happen. ......'",
                "It's interesting to listen to Sean's movie reviews. It's interesting to listen to Sean's movie reviews because he discusses movies from a perspective that I don't have.",
                "Sean: 'Oops, it's time for me to go home. See you later!'",
                "Me: 'See you later!",
                "After Sean and I parted ways, I was left with nothing to do.",
                "It's a nice day, I think I'll go for a walk in the park.",
                "",
                "",
                "夕方の公園",
                "公園の環境音",
                "Even though it was just after the summer solstice, the sun was still shining bright red at this time of the day.",
                "I was walking leisurely, savoring the scenery, which was a little different from when I was running in the morning.",
                "ONE 'Ah!",
                "I bumped into ONE. Well, even though he’s already left the glass case, this is ONE's home.",
                "I : 'Hey, ONE, I was just taking a walk in the park. Would you like to walk with me?'",
                "ONE: 'Yes.",
                "I and ONE started walking slowly through the park at dusk.",
                
                ],

                ///One and Sean///
                [
                "Okay, let's invite ONE and Sean.",
                "I : 'Are you two free this weekend? Do you want to go to a movie premiere?'",
                "ONE: 'Great, sounds fun!'",
                "Sean: 'Wow, that's the director's latest movie! I'm definitely going!",
                "Me,: 'Okay, Sunday, 2:00 at the station.'",
                "",
                "映画館",
                "拍手の音",
                "ONEとショーンの立ち絵",
                "",
                "繁華街",
                "Sean: 'Well, that was fun!　That's the director. You did a great job directing this movie. But I definitely didn't want that scene. ......'",
                "As soon as we left the theater, Sean started talking enthusiastically. It's interesting to listen to Sean's movie reviews because he discusses movies from a perspective that I don't have.",
                "Sean : 'Oops, it's time for me to go home. See you later!'",
                "Sean and I part ways, and I'm alone with ONE.",
                "ONE: 'Hey, Sugita. Do you want to go for a walk? I'm in the mood for a walk.'",
                "I : 'Sounds good. Let's go to the park where ONE was anyway.",
                
                ],

                ///Everyone///
                [
                "Okay, I'll invite everyone.",
                "I : '..... So, why don’t we go watch a movie.",
                "Sean: 'Yay! I'm a fan of that director.'",
                "ONE: 'A movie?  Sounds fun!",
                "Classmate 'Can we go too?",
                "Me: 'Sure.",
                "Classmate 'Wow, thanks!",
                "I : 'See you at the station on Sunday at 2:00.",
                "Everyone: 'Yes!",
                "",
                "",
                "映画館",
                "拍手の音",
                "",
                "繁華街",
                "Classmate: 'That was fun! It's the first time to see this kind of movie, but I really enjoyed it.'",
                "ONE: 'Yes! Movies are fun.'",
                "Sean: 'That director is good at making simple stories, but the direction is very elaborate, so there's a lot of depth to it. ......'",
                "Sean's movie review began. I've known him for a long time, and I'm used to it, but this must be the first time for ONE and his classmates. But Sean's stories are so interesting to listen to that even those who were surprised at first soon came to enjoy what he had to say.",
                "Sean : '...... Oh, I'm sorry. I guess I talked too much.'",
                "ONE: 'Nope. It was fun, Sean.'",
                "I:, 'Let's break up here, the train is getting close. I'm going that way, is there anyone on the same way home?'",
                "ONE 'Yes'.",
                "...... I ended up going home alone with ONE.",
                "",
                "電車",
                "電車走行音",
                "Me '......",
                "ONE '......",
                "When I was at school, I was fine, but now I'm in a different mood and it's embarrassing.",
                "ONE 'Hey, do you want to go for a walk?　Let's go to the park where I was.'",
                "I : 'Yeah.",
                "",
                "夕方の公園",
                "公園の環境音",
                "Even though it was just after the summer solstice, the sun was setting at this time of night, and the area was bathed in red light.",
                "Me and ONE were walking slowly along the park path.",
                
                ],

                ///alone///
                [
                    "In the end, I wanted to watch the movie by myself, so I decided to go without inviting anyone.",
                    "映画館",
                    "拍手の音",
                    "",
                    "電車",
                    "電車走行音",
                    "I enjoyed the movie. The colors in every scene were so vivid and beautiful, and the story was good.",
                    "I might invite someone to go see it again when it comes out.",
                    "",
                    "Well, but it's still a little early to go home.",
                    "It's a nice day, let's go for a walk in the park.",
                    "",
                    "夕方の公園",
                    "公園の環境音",
                    "Environmental sounds in the park",
                    "Even though it's just past the summer solstice, the sun has already set and the area is bathed in red light.",
                    "I was walking leisurely, savoring the scenery, which was a little different from when I was running in the morning.",
                    "ONE 'Ah!",
                    "I bumped into ONE. Well, even though I've already left the glass case, this is ONE's home.",
                    "I:, 'Hey, ONE, I was just taking a walk in the park. Would you like to walk with me?'",
                    "ONE: 'Yes.",
                    "Me and ONE started walking slowly through the park at dusk.",
                    
                ],

                ///Sean and One///
                [
                    "I'll give this preview away. It'd be better to let anyone who's interested see it.",
                    "I : 'So, Sean and ONE, go ahead.",
                    "ONE: 'Are you sure, {Sugita}!'",
                    "Me 'Yeah. It's not a movie I'm that interested in.'",
                    "Sean: 'Well, if it's ......, I'll be grateful. If we enjoy it, we can take Sugita to see it again after it comes out.",
                    "ONE 'Okay. I'll have fun.",
                    "Me: 'Have a good day.",
                                    "",
                    "Sunday",
                    "I: I'm bored......",
                    "Sean and ONE are probably enjoying the screening right now.",
                    "I should've been there too if I wanted to have some free time.",
                    "I : 'Well, whatever. I'll just go to the park and take a walk.",
                                    "",
                    "夕方の公園",
                    "公園の環境音",
                    "Even though it was just after the summer solstice, the sun was setting at this time of the day, and the area was bathed in a bright red light.",
                    "I was walking leisurely, savoring the scenery, which was a little different from when I was running in the morning.",
                    "ONE 'Ah!",
                    "I bumped into ONE. Well, even though I've already left the glass case, this is ONE's home.",
                    "I : 'Hey, ONE, I was just taking a walk in the park. Would you like to walk with me?'",
                    "ONE: 'Yes.",
                    "We started walking slowly through the park at dusk.",

                ],

                ///ZeroToOne///
                [
                    
                ],

                ///OneToTwo///
                [
                    
                ],

                ///TwoToThree///
                [
                    
                ],

                ///ThreeToFour///
                [
                    
                ],

                ///FourToFive///
                [
                    
                ],

                ///Route A///
                [
                    
                ],

                ///Route B///
                [
                    
                ],

                ///Route C///
                [
                    
                ],

                ///Route D///
                [
                    
                ],

                
            ]
        }
    }
}