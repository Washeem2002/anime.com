const express=require("express");
const cors=require('cors');
const app=express();
const path=require('path'); 
const bodyParser = require('body-parser');
const PORT=process.env.PORT || 5001;
app.use(cors());
//static files

app.use(bodyParser.json());



app.use(express.json());
app.use("/image",express.static(path.join(__dirname,"./image")));
let data=[{w:false,name:"Hyouka",voice:["sub"],genre:"Slice of Life",link:"/image/Hyoka.jpg",vid:"https://www.youtube.com/embed/LvfkO4Eih1c"},{w:false,name:"Horimiya",voice:["sub","dub"],genre:"Slice of Life",link:"/image/horimia.jpg",vid:"https://www.youtube.com/embed/NdwlKrnfLX4"},{w:false,name:"Saiki k ",voice:["sub"],genre:"Slice of Life",link:"/image/saiki.jpg",vid:"https://www.youtube.com/embed/sbw7QB6nrTc"},{w:false,name:"Mob Psycho",voice:["dub"],genre:"Slice of Life",link:"/image/mob.jpg",vid:"https://www.youtube.com/embed/FuKhBIoVuSg"},{w:false,name:"Komi can't communicate",voice:["sub","dub"],genre:"Slice of Life",link:"/image/komi.jpg",vid:"https://www.youtube.com/embed/tLdLTSnmnoA"},{w:false,name:"Tonikawa",voice:["sub","dub"],genre:"Slice of Life",link:"/image/tonikawa.jpg",vid:"https://www.youtube.com/embed/lW95OSBLxiE"},{w:false,name:"Bunny Drop",voice:["dub"],genre:"Slice of Life",link:"/image/bunny.jpg",vid:"https://www.youtube.com/embed/PlWk-96JHz4"},{w:false,name:"Barakamon",voice:["sub","dub"],genre:"Slice of Life",link:"/image/bakemon.jpg",vid:"https://www.youtube.com/embed/1gmN_3kr4wo"},{w:false,name:"Kaguya-sama",voice:["sub","dub"],genre:"Slice of Life",link:"/image/kaguya.jpg",vid:"https://www.youtube.com/embed/pstFsrInyz8"},{w:false,name:"Spy-Family",voice:["sub","dub"],genre:"Slice of Life",link:"/image/spyfamily.jpg",vid:"https://www.youtube.com/embed/Oqd2C3oZkBU"},{w:false,name:"One Piece",voice:["sub","dub"],genre:"Action",link:"/image/onepiece.jpg",vid:"https://www.youtube.com/embed/sMo6PrKSD_c&t=42s"},{w:false,name:"Vinland Saga",voice:["dub"],genre:"Action",link:"/image/vinland.jpg",vid:"https://www.youtube.com/embed/pahdCwHJjaU"},{w:false,name:"Naruto",voice:["sub","dub"],genre:"Action",link:"/image/naruto.jpg",vid:"https://www.youtube.com/embed/BxkVGm6Mn2o"},{w:false,name:"Bleach",voice:["sub","dub"],genre:"Action",link:"/image/bleach.jpg",vid:"https://www.youtube.com/embed/e8YBesRKq_U"},{w:false,name:"Black Clover",voice:["sub","dub"],genre:"Action",link:"/image/blackclover.jpg",vid:"https://www.youtube.com/embed/u0cu-T7C9bU"},{w:false,name:"Attack on Titan",voice:["sub","dub"],genre:"Action",link:"/image/attackontitan.jpg",vid:"https://www.youtube.com/embed/SlNpRThS9t8"},{w:false,name:"M.H.A",voice:["sub","dub"],genre:"Action",link:"/image/myhero.jpg",vid:"https://www.youtube.com/embed/D5fYOnwYkj4"},{w:false,name:"Haikyuu",voice:["dub"],genre:"Action",link:"/image/haikyuu.jpg",vid:"https://www.youtube.com/embed/5V4SQVBpnnU"},{w:false,name:"Demon Slayer",voice:["sub","dub"],genre:"Action",link:"/image/demonslayer.png",vid:"https://www.youtube.com/embed/9DhuWapDDrw"},{w:false,name:"Jujutsu Kaisan",voice:["sub","dub"],genre:"Action",link:"/image/jujutsu.jpg",vid:"https://www.youtube.com/embed/O6qVieflwqs"},{w:false,name:"JoJo",voice:["dub"],link:"/image/jojo.jpg",genre:"Shonen",vid:"https://www.youtube.com/embed/EeCX8Y0a278"},{w:false,name:"Death Note",voice:["sub","dub"],link:"/image/deth.jpg",genre:"Shonen",vid:"https://www.youtube.com/embed/NlJZ-YgAt-c"},{w:false,name:"Fullmetal Alchemist",voice:["sub","dub"],link:"/image/fullmetal.jpg",genre:"Shonen",vid:"https://www.youtube.com/embed/kx0nBaS_q50"},{w:false,name:"Gintama",voice:["sub","dub"],link:"/image/gitama.jpg",genre:"Shonen",vid:"https://www.youtube.com/embed/bZYysREKnm4"},{w:false,name:"Dragon Ball",voice:["sub","dub"],link:"/image/dragonball.jpg",genre:"Shonen",vid:"https://www.youtube.com/embed/t5CIs0jDqC8"},{w:false,name:"One Punch Man",voice:["dub"],link:"/image/onepunchman.jpg",genre:"Shonen",vid:"https://www.youtube.com/embed/YUH1mfV3IEU"},{w:false,name:"Fairy Tail",voice:["sub","dub"],link:"/image/fairytail.jpg",genre:"Shonen",vid:"https://www.youtube.com/embed/4KSN7mxhiYE"},{w:false,name:"The Seven Deadly Sins",voice:["sub","dub"],link:"/image/sevendedlusin.jpg",genre:"Shonen",vid:"https://www.youtube.com/embed/wxcvbL6o55M"},{w:false,name:"Attack on Titan",voice:["sub","dub"],link:"/image/attackontitan2.jpg",genre:"Shonen",vid:"https://www.youtube.com/embed/r7MosyoAUhQ"},{w:false,name:"Spy x Family",voice:["sub","dub"],link:"/image/spyfamily.jpg",genre:"Shonen",vid:"https://www.youtube.com/embed/CCXLUQzuigw"}]



app.get("/api", (req,res)=>{
    res.json(data);
});
app.post('/post',  (req, res) => {
    // Access the sent number from the request body
    const receivedNumber = req.body.name;
    
        for(let i=0;i<data.length;i++)
        {
            if(data[i].name===receivedNumber)
            {
               if( data[i].w===true)
               {
                data[i].w=false;
               }
               else
               {
                data[i].w=true;
               }
            }
        }
    
    res.json(data);
  
  });


//static files
app.use(express.static(path.join(__dirname,"./my-app/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./my-app/build/index.html"));
})


app.listen(PORT,()=>{
    console.log("server is lisinfdsd")
});
