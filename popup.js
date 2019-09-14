console.log('Start');
var ids=["485580","338180","104200","409720","299360","291550","368900","29800","219640","730","459820","466240","96100","92100","322330","570","409160","252630","417860"
    ,"8500","273350","410590","334210","392050","308600","355150","657200","269210","219150","513560","222880","391720","550","319630","202090","370510","226320","383030","533540"
    ,"314020","48720","17710","511800","201790","427270","104900","263980","293180","444090","238960","218620","24240","620","292620","282440","200210","474750","372800","252490"
    ,"41000","41010","326180","251970","204880","542340","63380","429700","318430","252850","316390","373110","323370","389300","318600","239220","447850","329950"
    ,"432150","380020","248570","372000","304050","304930","247240","230410","331710","354850"];



var jsn=[
    {"appid":550,"name":"Left 4 Dead 2","series":1,"price":"750"},
    {"appid":570,"name":"Dota 2","series":1,"price":"750"},
    {"appid":620,"name":"Portal 2","series":1,"price":"750"},
    {"appid":730,"name":"Counter-Strike: Global Offensive","series":1,"price":"1200"},
    {"appid":8500,"name":"EVE Online","series":1,"price":"1200"},
    {"appid":17710,"name":"Nuclear Dawn","series":1,"price":"750"},
    {"appid":24240,"name":"PAYDAY: The Heist","series":1,"price":"667"},
    {"appid":29800,"name":"Caster","series":1,"price":"1000"},
    {"appid":41000,"name":"Serious Sam HD: The First Encounter","series":1,"price":"750"},
    {"appid":41010,"name":"Serious Sam HD: The Second Encounter","series":1,"price":"750"},
    {"appid":48720,"name":"Mount &amp; Blade: With Fire and Sword","series":1,"price":"1200"},
    {"appid":63380,"name":"Sniper Elite V2","series":1,"price":"667"},
    {"appid":92100,"name":"DETOUR","series":1,"price":"1200"},
    {"appid":96100,"name":"Defy Gravity","series":1,"price":"1200"},
    {"appid":104200,"name":"BEEP","series":1,"price":"1200"},
    {"appid":104900,"name":"ORION: Prelude","series":1,"price":"500"},
    {"appid":200210,"name":"Realm of the Mad God","series":1,"price":"667"},
    {"appid":201790,"name":"Orcs Must Die! 2","series":1,"price":"750"},
    {"appid":202090,"name":"Magicka: Wizard Wars","series":1,"price":"1000"},
    {"appid":204880,"name":"Sins of a Solar Empire: Rebellion","series":1,"price":"400"},
    {"appid":218620,"name":"PAYDAY 2","series":1,"price":"667"},
    {"appid":219150,"name":"Hotline Miami","series":1,"price":"1000"},
    {"appid":219640,"name":"Chivalry: Medieval Warfare","series":1,"price":"750"},
    {"appid":222880,"name":"Insurgency","series":1,"price":"1000"},
    {"appid":226320,"name":"Marvel Heroes Omega","series":1,"price":"667"},
    {"appid":230410,"name":"Warframe","series":1,"price":"750"},
    {"appid":238960,"name":"Path of Exile","series":1,"price":"462"},
    {"appid":239220,"name":"The Mighty Quest For Epic Loot","series":1,"price":"667"},
    {"appid":247240,"name":"Volgarr the Viking","series":1,"price":"1000"},
    {"appid":248570,"name":"Toribash","series":1,"price":"857"},
    {"appid":251970,"name":"Sins of a Dark Age","series":1,"price":"667"},
    {"appid":252490,"name":"Rust","series":1,"price":"1200"},
    {"appid":252630,"name":"Eldritch","series":1,"price":"750"},
    {"appid":252850,"name":"Streamline","series":1,"price":"750"},
    {"appid":263980,"name":"Out There Somewhere","series":1,"price":"1200"},
    {"appid":269210,"name":"Hero Siege","series":1,"price":"1200"},
    {"appid":273350,"name":"Evolve Stage 2","series":1,"price":"1000"},
    {"appid":282440,"name":"Quake Live","series":1,"price":"545"},
    {"appid":291550,"name":"Brawlhalla","series":1,"price":"667"},
    {"appid":292620,"name":"Pressured","series":1,"price":"1200"},
    {"appid":293180,"name":"Overcast - Walden and the Werewolf","series":1,"price":"1000"},
    {"appid":299360,"name":"Block N Load","series":1,"price":"1000"},
    {"appid":304050,"name":"Trove","series":1,"price":"667"},
    {"appid":304930,"name":"Unturned","series":1,"price":"462"},
    {"appid":308600,"name":"Geneshift","series":1,"price":"600"},
    {"appid":314020,"name":"Morphopolis","series":1,"price":"1200"},
    {"appid":316390,"name":"sZone-Online","series":1,"price":"400"},
    {"appid":318430,"name":"Squishy the Suicidal Pig","series":1,"price":"1200"},
    {"appid":318600,"name":"The Flame in the Flood","series":1,"price":"1200"},
    {"appid":319630,"name":"Life is Strange\u2122","series":1,"price":"1000"},
    {"appid":322330,"name":"Don't Starve Together","series":1,"price":"1000"},
    {"appid":323370,"name":"TERA","series":1,"price":"857"},
    {"appid":326180,"name":"Sinister City","series":1,"price":"1200"},
    {"appid":329950,"name":"The Slaughtering Grounds","series":1,"price":"1200"},
    {"appid":331710,"name":"Why So Evil","series":1,"price":"750"},
    {"appid":334210,"name":"Fortified","series":1,"price":"1000"},
    {"appid":338180,"name":"Batla","series":1,"price":"1000"},
    {"appid":354850,"name":"Why So Evil 2: Dystopia","series":1,"price":"667"},
    {"appid":355150,"name":"gravilon","series":1,"price":"1200"},
    {"appid":368900,"name":"Brilliant Bob","series":1,"price":"667"},
    {"appid":370510,"name":"Marble Mayhem: Fragile Ball","series":1,"price":"1200"},
    {"appid":372000,"name":"Tree of Savior (English Ver.)","series":1,"price":"750"},
    {"appid":372800,"name":"RPG MO","series":1,"price":"857"},
    {"appid":373110,"name":"Temper Tantrum","series":1,"price":"1200"},
    {"appid":380020,"name":"Three Heroes","series":1,"price":"1000"},
    {"appid":383030,"name":"Medieval Mercs","series":1,"price":"1200"},
    {"appid":389300,"name":"TERA","series":1,"price":"857"},
    {"appid":391720,"name":"Layers of Fear","series":1,"price":"1000"},
    {"appid":392050,"name":"Galactic Hitman","series":1,"price":"1200"},
    {"appid":409160,"name":"Dr. Langeskov, The Tiger, and The Terribly Cursed Emerald: A Whirlwind Heist","series":1,"price":"857"},
    {"appid":409720,"name":"BioShock 2 Remastered","series":1,"price":"1000"},
    {"appid":410590,"name":"Fiends of Imprisonment","series":1,"price":"1200"},
    {"appid":417860,"name":"Emily is Away","series":1,"price":"1200"},
    {"appid":427270,"name":"Orcs Must Die! Unchained","series":1,"price":"545"},
    {"appid":429700,"name":"Squirbs","series":1,"price":"1200"},
    {"appid":432150,"name":"They Came From The Moon","series":1,"price":"667"},
    {"appid":444090,"name":"Paladins","series":1,"price":"750"},
    {"appid":447850,"name":"The Next Door","series":1,"price":"1000"},
    {"appid":459820,"name":"Crush Crush","series":1,"price":"545"},
    {"appid":466240,"name":"Deceit","series":1,"price":"1000"},
    {"appid":474750,"name":"Reigns","series":1,"price":"1200"},
    {"appid":485580,"name":"24 HOURS","series":1,"price":"1200"},
    {"appid":511800,"name":"ONRAID","series":1,"price":"667"},
    {"appid":513560,"name":"Hunger Dungeon","series":1,"price":"600"},
    {"appid":533540,"name":"MONMUSU","series":1,"price":"667"},
    {"appid":542340,"name":"Slingshot people","series":1,"price":"1200"},
    {"appid":657200,"name":"Hand Simulator","series":1,"price":"1200"},
    {name: "0RBITALIS", price: "1000"},
    {name: "1... 2... 3... KICK IT! (Drop That Beat Like an Ugly Baby)", price: "1000"},
    {name: "10 Second Ninja", price: "1200"},
    {name: "Forge of Gods (RPG)", price: "857"},
    {name: "10,000,000", price: "1000"},
    {name: "100% Orange Juice", price: "750"},
    {name: "12 Labours of Hercules", price: "1200"},
    {name: "12 Labours of Hercules II: The Cretan Bull", price: "1200"},
    {name: "12 Labours of Hercules III: Girl Power", price: "1200"},
    {name: "12 Labours of Hercules IV: Mother Nature", price: "857"},
    {name: "16bit Trader", price: "1000"},
    {name: "1954 Alcatraz", price: "750"},
    {name: "1Quest", price: "1000"},
    {name: "3 Stars of Destiny", price: "1200"},
    {name: "3DRPG", price: "750"},
    {name: "3079 -- Block Action RPG", price: "1000"},
    {name: "3089 -- Futuristic Action RPG", price: "750"},
    {name: "500 Years Act 1", price: "1000"},
    {name: "6180 the moon", price: "1200"},
    {name: "7 Grand Steps, Step 1: What Ancients Begat", price: "750"},
    {name: "7,62 High Calibre", price: "1000"},
    {name: "8-Bit Adventures: The Forgotten Journey Remastered Edition", price: "429"},
    {name: "8BitMMO", price: "1000"},
    {name: "9 Clues: The Secret of Serpent Creek", price: "1000"},
    {name: "9 Clues 2: The Ward", price: "1000"},
    {name: "99 Levels To Hell", price: "1200"},
    {name: "99 Spirits", price: "400"},
    {name: "A Bastard's Tale", price: "1200"},
    {name: "A Bird Story", price: "1200"},
    {name: "A Druid's Duel", price: "857"},
    {name: "A Golden Wake", price: "1000"},
    {name: "A Story About My Uncle", price: "1000"},
    {name: "A Valley Without Wind", price: "1200"},
    {name: "A Virus Named TOM", price: "600"},
    {name: "A Wild Catgirl Appears!", price: "1200"},
    {name: "A-Men", price: "1000"},
    {name: "A-Men 2", price: "1200"},
    {name: "Abalone", price: "1000"},
    {name: "ABO MANDO", price: "857"},
    {name: "About Love, Hate and the other ones", price: "1200"},
    {name: "Absconding Zatwor", price: "1000"},
    {name: "Abyss Odyssey", price: "750"},
    {name: "Abyss: The Wraiths of Eden", price: "1000"},
    {name: "Ace of Spades", price: "1000"},
    {name: "A City Sleeps", price: "1200"},
    {name: "Acceleration of SUGURI X-Edition HD", price: "1200"},
    {name: "Actual Sunlight", price: "750"},
    {name: "Adventure in the Tower of Flight", price: "1200"},
    {name: "Aeon Command", price: "1200"},
    {name: "Aerena - Clash of Champions", price: "750"},
    {name: "Afterfall InSanity Extended Edition", price: "1000"},
    {name: "Agarest: Generations of War", price: "667"},
    {name: "Agarest: Generations of War Zero", price: "750"},
    {name: "Age of Empires II HD", price: "750"},
    {name: "Age of Empires III: Complete Collection", price: "667"},
    {name: "Age of Steel: Recharge", price: "857"},
    {name: "Age of Wonders III", price: "750"},
    {name: "AI War: Fleet Command", price: "1000"},
    {name: "AirMech", price: "667"},
    {name: "Akane the Kunoichi", price: "857"},
    {name: "Alan Wake", price: "750"},
    {name: "Alarameth TD", price: ""},
    {name: "Albedo: Eyes from Outer Space", price: ""},
    {name: "Alchemy Mysteries: Prague Legends", price: "1000"},
    {name: "Alpha Kimori 1", price: "750"},
    {name: "Alpha Runner", price: "1000"},
    {name: "Alter World", price: "857"},
    {name: "Always Sometimes Monsters", price: "1200"},
    {name: "Among the Heavens", price: "1200"},
    {name: "Ampersand", price: "1200"},
    {name: "An Assassin in Orlandes", price: "1000"},
    {name: "Angels of Fasaria: Version 2.0", price: "1200"},
    {name: "Angry Birds Space", price: "667"},
    {name: "Anno 2070", price: "667"},
    {name: "Anodyne", price: "750"},
    {name: "Anomaly 2", price: "1000"},
    {name: "Anomaly Defenders", price: "1200"},
    {name: "Anomaly Korea", price: "1200"},
    {name: "Anomaly: Warzone Earth", price: "1000"},
    {name: "Anomaly Warzone Earth Mobile Campaign", price: "1200"},
    {name: "Anoxemia", price: "667"},
    {name: "Antichamber", price: "1000"},
    {name: "Antisquad", price: "857"},
    {name: "AoF World Online", price: "1200"},
    {name: "Aperture Tag: The Paint Gun Testing Initiative", price: "1200"},
    {name: "Appointment With F.E.A.R.", price: "600"},
    {name: "Aqua Kitty - Milk Mine Defender", price: "1000"},
    {name: "AR-K", price: "1000"},
    {name: "ArcheBlade", price: "750"},
    {name: "Arclight Cascade", price: "750"},
    {name: "Arma 3", price: "750"},
    {name: "Asphyxia", price: "857"},
    {name: "Astebreed", price: "750"},
    {name: "Astro Emporia", price: "500"},
    {name: "Aura Kingdom", price: "750"},
    {name: "Avoid Sensory Overload", price: "1200"},
    {name: "Awesomenauts", price: "429"},
    {name: "AX:EL", price: "1000"},
    {name: "Axis Football 2015", price: "750"},
    {name: "Back to Bed", price: "1000"},
    {name: "Bad Hotel", price: "1000"},
    {name: "Bad Rats: the Rats' Revenge", price: "1200"},
    {name: "Ballad of Solar", price: "1200"},
    {name: "Ballpoint Universe - Infinite", price: "545"},
    {name: "BanHammer", price: "1000"},
    {name: "Bardbarian", price: "857"},
    {name: "BasketBelle", price: ""},
    {name: "Bastion", price: "1200"},
    {name: "Batman: Arkham Asylum Game of the Year Edition", price: "1200"},
    {name: "Batman: Arkham City - Game of the Year Edition", price: "857"},
    {name: "Batman: Arkham Origins", price: "667"},
    {name: "BattleBlock Theater", price: "667"},
    {name: "Battlepaths", price: "545"},
    {name: "Battlepillars Gold Edition", price: "400"},
    {name: "Battleplan: American Civil War", price: "1000"},
    {name: "Battletank LOBA", price: ""},
    {name: "Beach Bounce", price: "857"},
    {name: "Beat Hazard", price: "857"},
    {name: "BeatBlasters III", price: "1200"},
    {name: "Beatbuddy: Tale of the Guardians", price: "1000"},
    {name: "BEEP", price: "1200"},
    {name: "Betrayer", price: "1000"},
    {name: "Beware Planet Earth", price: "1000"},
    {name: "Beyond Space", price: "1200"},
    {name: "Big Pharma", price: ""},
    {name: "Biodrone Battle", price: "1200"},
    {name: "Bionic Dues", price: "1000"},
    {name: "Bioshock Infinite", price: "857"},
    {name: "BioShock Infinite", price: "1000"},
    {name: "Bit Blaster XL", price: "1200"},
    {name: "Bit Dungeon II", price: "1200"},
    {name: "BiT Evolution", price: "857"},
    {name: "BIT.TRIP BEAT", price: "1200"},
    {name: "BIT.TRIP FATE", price: "1200"},
    {name: "BIT.TRIP Presents... Runner2: Future Legend of Rhythm Alien", price: "750"},
    {name: "BIT.TRIP RUNNER", price: "1000"},
    {name: "Blackbay Asylum", price: "1000"},
    {name: "Blackguards", price: "750"},
    {name: "Blackguards 2", price: "750"},
    {name: "Blackwell Convergence", price: "1000"},
    {name: "Blackwell Deception", price: "1000"},
    {name: "Blackwell Epiphany", price: "1000"},
    {name: "Blackwell Unbound", price: "1000"},
    {name: "Blade Kitten", price: "1000"},
    {name: "BlazBlue: Calamity Trigger", price: "667"}
]

var page_id=1;
var SteamCards = document.getElementById('changeColor');
var SteamBoxes = document.getElementsByClassName('red')[0];
var TestBtn = document.getElementById('test');

changeColor.onclick = function(element) {
    console.log("Click");
    for(var i=0;i<jsn.length;i++){
        //GemCosts(jsn[i].name,jsn[i].price);
        setTimeout(GemCosts,i*1000,jsn[i].name,jsn[i].price);
    }
};
SteamBoxes.onclick = function(element) {
    console.log("Click");
    containers_on_page();
};
TestBtn.onclick = function(element) {
    console.log("Click");
    //getItemInfo("MAG-7");
    //getBoxInfo("https://steamcommunity.com/market/listings/730/Chroma%203%20Case");
    getItemInfo("Dual Berettas | Äóõîâèêè");
    console.log("Conole log Dual Berettas | Äóõîâèêè");
};

function containers_on_page(){
    page_id=1;
    $.ajax({
        type:'GET',
        url:"https://steamcommunity.com/market/search?q=&category_730_ItemSet%5B%5D=any&category_730_ProPlayer%5B%5D=any&category_730_StickerCapsule%5B%5D=any&category_730_TournamentTeam%5B%5D=any&category_730_Weapon%5B%5D=any&category_730_Type%5B%5D=tag_CSGO_Type_WeaponCase&appid=730#p"+page_id.toString()+"_popular_desc",
        cache:false,
        success:function(data){
        arr = $(data).find('.market_listing_row_link');
        items=[].slice.call(arr);
        items.forEach(function(element,index) {
            console.log("Box price is "+$(data).find(".sale_price")[index].innerHTML);
            getBoxInfo(element.href);
        });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }

});
}

function  getBoxInfo(href){
    console.log("this is "+href);
    $.ajax({
        type:'GET',
        url:href,
        cache:false,
        success:function(data){
            values=[];
            console.log("start");
            items=data.split("g_rgAssets")[1].split("[")[1].split("]")[0].split("}").slice(7);
            items.pop();
            items.pop();
            items.pop();
            items.forEach(function(element){
                jso=element.slice(1).concat("}");
                json=JSON.parse(jso);
                values.push(json.value);
            });

            values.forEach(function(name){
                console.log("NoDecode"+name);
                getItemInfo(name);
            });
            console.log(values.length);
            console.log(values);
            //var scriptContent = $($.parseHTML(data, document, true)).filter('script').text();
            //console.log(scriptContent);
            //g_rgAssets
            //descriptions
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }

    });

}

function  getItemInfo(name){
    console.log("Name"+name);
    console.log("Decode"+utf8Decode(name).toString());
    console.log("NoDecode"+name.toString());
    requ="https://steamcommunity.com/market/search?q="+utf8Decode(name).toString();
    //console.log("https://steamcommunity.com/market/search?q="+utf8Decode(name).toString());
    $.ajax({
        type:'GET',
        url:encodeURI(requ),
        cache:false,
        success:function(data){
            //console.log(data);
            console.log("URL="+requ);
            console.log("URLDECODE="+encodeURI(requ)) ;
            price=$(data).find('.sale_price');
            console.log(price);
        }
    });
}

function OtherSets() {
    $.ajax({
        type:'GET',
        url:"http://steamtradingcards.wikia.com/wiki/Gems_by_game",
        cache:false,
        success:function(data){
            var c=$(data).find("tbody tr");
            var lenght= c.length;
            for(var i=50;i<150;i++) {
                var a = $(data).find("tbody tr:nth-child("+i+")>td:first-child>a")[0];
                var b = $(data).find("tbody tr:nth-child("+i+")>td:last-child")[0];
                try {
                    var temp = new Object();
                    temp["name"] = a.getAttribute("title");
                    temp["price"] = b.innerHTML.substring(0, b.innerHTML.length - 1);

                    jsn.push(temp);console.log(i);

                    //console.log('{"name":"' + a.getAttribute("title") + '",' + '"price":"' + b.innerHTML + '"},')
                }
                catch(e){
                }
            }
            console.log(jsn);
        }
    });
}

function utf8Decode(utf8String) {
    if (typeof utf8String != 'string') throw new TypeError('parameter ‘utf8String’ is not a string');
    // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
    const unicodeString = utf8String.replace(
        /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
        function(c) {  // (note parentheses for precedence)
            var cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f);
            return String.fromCharCode(cc); }
    ).replace(
        /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
        function(c) {  // (note parentheses for precedence)
            var cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
            return String.fromCharCode(cc); }
    );
    return unicodeString;
}


function GemCosts(idss,gems) {
    var nam="24";
    nam=idss.replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+').replace(" ",'+');
    $.ajax({
        type:'GET',
        url:"https://steamcommunity.com/market/search?category_753_Game%5B%5D=any&category_753_item_class%5B%5D=tag_item_class_5&appid=753&q="+nam,
        cache:false,
        success:function(data){
            var math=gems/66.6;

            var link=$(data).find(".sale_price")[0].innerHTML;
            var name=$(data).find(".market_listing_item_name")[0].innerHTML;
            var pers=$(data).find(".market_listing_row_link")[0].getAttribute("href");

            var res=parseInt(link.replace("p","").replace("ó","").replace("á","").replace(".","").replace(",","."))-math;

            console.log(name+" : "+gems+" : "+link+" ñòîèò ñäåëàòü çà:"+math);
            if(link!="0 póá.")
                console.log(name+" : "+pers +"   ---"+ "âûãîäà: "+res);
            else
                console.log(name+" : "+pers + "   âûãîäà: ÏÐÎÂÅÐÈÒÜ!!!!!!");

            $("#error").html(data);
        }
    });
}