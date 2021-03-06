module.exports ={
    daysList : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysListShort : ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
    monthList : ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthListShort : ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],

    getDate(dateString){
      
        var dateString = new Date(dateString);
        var breakedDateObj = {};
        var temp=0;

        breakedDateObj.dayName = dateString.getDay();
        var temp = dateString.getDate();
        breakedDateObj.dateZero = temp < 10 ? ("0" + temp) : temp;
        breakedDateObj.date=temp;

        temp = dateString.getMonth()+1;
        breakedDateObj.monthZero = temp < 10 ? ("0" + temp) : temp;
        breakedDateObj.month=temp;

        breakedDateObj.year = dateString.getFullYear();
        breakedDateObj.yearShort = breakedDateObj.year.toString().substr(-2);

        temp = dateString.getHours();
        breakedDateObj.hour = temp < 10 ? ("0" + temp) : temp;
        temp = dateString.getMinutes();
        breakedDateObj.minute= temp < 10 ? ("0" + temp) : temp;
        breakedDateObj.second = dateString.getSeconds();

        return breakedDateObj;     
    },
    dayFormat(day){
        return ([1,11,21].indexOf(day) != -1) ? 'st' : ([2,22].indexOf(day) != -1) ? 'nd' : ([3,23].indexOf(day) != -1) ? 'rd' : 'th';
    },
    amPM(hour){
        var dObj= this.getDate(date)
        var ampm = (parseInt(hour) >= 12) ? "PM" : 'AM';                                   
        dObj.hour = ( hour>12) ?hour-12:hour;
        return ampm;
    },
    time_12_to_24(hour){
        hour= (hour>12) ? "0"+(hour-12):hour; 
        return hour;
    },
    // 01
    formatShortDayNameDMY(dateString){
        var dObj = this.getDate(dateString);
        var str=this.daysListShort[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]+" "+dObj.year;
        return str;
    },
    // 02
    formatFullDayNameDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.daysList[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]+" "+dObj.year;
        return str;
    },
    // 03
    formatShortDayNameDMYHM24(dateString){
        var dObj=this.getDate(dateString);
        var str=this.daysListShort[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month
            ]+" "+dObj.year+" "+dObj.hour+":"+dObj.minute;
        return str;
    },
    // 04
    formatFullDayNameDMYHM24(dateString){
        var dObj=this.getDate(dateString);
        var str=this.daysList[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]
            +" "+dObj.year+" "+dObj.hour+":"+dObj.minute;
        return str;
    },
    // 05
    formatShortDayNameDMYHM12(dateString){
        var dObj=this.getDate(dateString);
        var temp=(dateString.search(/PM/i) != -1 || dateString.search(/AM/i) != -1);
        var str;
        if( temp && (!(isNaN(dObj.hour)))){
            str=this.daysListShort[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]
                +" "+dObj.year+" "+dObj.hour+":"+dObj.minute;            
            return str;
        }else if(temp && isNaN(dObj.hour)){
            return "false Statement";
        }else{
            str=this.daysListShort[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]
                +" "+dObj.year+" "+this.time_12_to_24(dObj.hour)+":"+dObj.minute+" "+this.amPM(dObj.hour);
            return str;
        }
              
    },
    // 06
    formatFullDayNameDMYHM12(dateString){
        var dObj=this.getDate(dateString);
        var temp=(dateString.search(/PM/i) != -1 || dateString.search(/AM/i) != -1);
        var str;
        if( temp && (!(isNaN(dObj.hour)))){
            str=this.daysList[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]
                +" "+dObj.year+" "+dObj.hour+":"+dObj.minute;            
            return str;
        }else if(temp && isNaN(dObj.hour)){
            return "false Statement";
        }else{
            str=this.daysList[dObj.dayName]+", "+(dObj.date+""+this.dayFormat(dObj.date))+" "+this.monthListShort[dObj.month]
                +" "+dObj.year+" "+this.time_12_to_24(dObj.hour)+":"+dObj.minute+" "+this.amPM(dObj.hour);
            return str;
        }
    },
    //sepration - month name 0,3
    // 07
    formatShortMonthYMD(dateString){
        var dObj = this.getDate(dateString);
        var str=dObj.year+"-"+this.monthListShort[dObj.month]+"-"+dObj.dateZero;
        return str
    },
    // 08
    formatShortMonthDMY(dateString){
        var dObj = this.getDate(dateString);
        var str=dObj.dateZero+"-"+this.monthListShort[dObj.month]+"-"+dObj.year;
        return str;
    },
    // 09
    formatShortMonthMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthListShort[dObj.month]+"-"+dObj.dateZero+"-"+dObj.year;
        return str;
    },
    //sepration - month number 
    // 10
    formatHypenDMY(dateString){
        var dObj = this.getDate(dateString);
        var str=dObj.dateZero+"-"+dObj.monthZeroh+"-"+dObj.year;
        return str;
    },
    // 11
    formatHyphenMDY(dateString){
        var dObj = this.getDate(dateString);
        var str=dObj.monthZero+"-"+dObj.dateZero+"-"+dObj.year;
        return str;
    },
    // 12
    formatHypenYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"-"+dObj.monthZero+"-"+dObj.dateZero;
        return str;
    },
    //full month name
    // 13
    formatLongMonthMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthList[dObj.month]+"-"+dObj.dateZero+"-"+dObj.year;
        return str;
    },
    // 14
    formatLongMonthYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"-"+this.monthList[dObj.month]+"-"+dObj.dateZero;
        return str;
    },
    //15
    formatLongMonthDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"-"+this.monthList[dObj.month]+"-"+dObj.year;
        return str;
    },
    //    time ago
    //    25
    timeSince(date) {

        var seconds = Math.floor((new Date() - new Date(date))/1000);
        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years"+" ago";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months"+" ago";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days"+" ago";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours"+" ago";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes"+" ago";
        }
            return Math.floor(seconds) + " seconds"+" ago";
    },
    //sepration / month name 0,3
    //  26
    formatSlashYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"/"+dObj.monthZero+"/"+dObj.dateZero;
        return str;
    },
    // 27
    formatSlashDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"/"+dObj.monthZero+"/"+dObj.year;
        return str;
    },
    // 28
    formatSlashMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.monthZero+"/"+dObj.dateZero+"/"+dObj.year;
        return str;
    },
    //29
    formatSlashShortMonthYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"/"+this.monthListShort[dObj.month]+"/"+dObj.dateZero;
        return str;
    },
    // 30
    formatSlashShortMonthDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"/"+this.monthListShort[dObj.month]+"/"+dObj.year;
        return str;
    },
    // 31
    formatSlashShortMonthMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthListShort[dObj.month]+"/"+dObj.dateZero+"/"+dObj.year;
        return str;
    },
    // 32
    formatSlashLongMonthYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"/"+this.monthList[dObj.month]+"/"+dObj.dateZero;
        return str;
    },
    // 33
    formatSlashLongMonthDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"/"+this.monthList[dObj.month]+"/"+dObj.year;
        return str;
    },
    // 34
    formatSlashLongMonthMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthList[dObj.month]+"/"+dObj.dateZero+"/"+dObj.year;
        return str;
    },

    // sepration dot
    //  35
    formatDotYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"."+dObj.monthZero+"."+dObj.dateZero;
        return str;
    },
    // 36
    formatDotDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"."+dObj.monthZero+"."+dObj.year;
        return str;
    },
    // 37
    formatDotMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.monthZero+"."+dObj.dateZero+"."+dObj.year;
        return str;
    },
    //38
    formatDotShortMonthYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"."+this.monthListShort[dObj.month]+"."+dObj.dateZero;
        return str;
    },
    // 39
    formatDotShortMonthDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"."+this.monthListShort[dObj.month]+"."+dObj.year;
        return str;
    },
    // 40
    formatDotShortMonthMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthListShort[dObj.month]+"."+dObj.dateZero+"."+dObj.year;
        return str;
    },
    // 41
    formatDotFullMonthYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year+"."+this.monthList[dObj.month]+"."+dObj.dateZero;
        return str;
    },
    // 42
    formatDotFullMonthDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"."+this.monthList[dObj.month]+"."+dObj.year;
        return str;
    },
    // 43
    formatDotFullMonthMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthList[dObj.month]+"."+dObj.dateZero+"."+dObj.year;
        return str;
    },
    //46
    //Short Year
    //47
    formatShortMonthYearDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"-"+this.monthListShort[dObj.month]+"-"+dObj.yearShort;
        return str;
    },
    //48
    formatShortMonthYearYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.yearShort+"-"+this.monthListShort[dObj.month]+"-"+dObj.dateZero;
        return str;
    },
    //49
    formatShortMonthYearMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthListShort[dObj.month]+"-"+dObj.dateZero+"-"+dObj.yearShort;
        return str;
    },
    // slash seprate
    //53
    formatSlashShortMonthYearDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"/"+this.monthListShort[dObj.month]+"/"+dObj.yearShort;
        return str;
    },
    //54
    formatSlashShortMonthYearYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.yearShort+"/"+this.monthListShort[dObj.month]+"/"+dObj.dateZero;
        return str;
    },
    //55
    formatSlashShortMonthYearMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthListShort[dObj.month]+"/"+dObj.dateZero+"/"+dObj.yearShort;
        return str;
    },
    // dot seprate
    //56
    formatDotShortMonthYearDMY(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.dateZero+"."+this.monthListShort[dObj.month]+"."+dObj.yearShort;
        return str;
    },
    //57
    formatDotShortMonthYearYMD(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.yearShort+"."+this.monthListShort[dObj.month]+"."+dObj.dateZero;
        return str;
    },
    //58
    formatDotShortMonthYearMDY(dateString){
        var dObj=this.getDate(dateString);
        var str=this.monthListShort[dObj.month]+"."+dObj.dateZero+"."+dObj.yearShort;
        return str;
    },
    //59
    formatShortMonthDMYHM24(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.date+"-"+this.monthListShort[dObj.month]+"-"+dObj.year+" "+dObj.hour+":"+dObj.minute;
        return str;
    },
    // 60
    formatShortMonthMDYHM12(dateString){
        var dObj=this.getDate(dateString);
        var temp=(dateString.search(/PM/i) != -1 || dateString.search(/AM/i) != -1);
        var str;
        if( temp && (!(isNaN(dObj.hour)))){
            str=dObj.date+"-"+this.monthListShort[dObj.month]+"-"+dObj.year+" "+dObj.hour+":"+dObj.minute;            
            return str;
        }else if(temp && isNaN(dObj.hour)){
            return "false Statement";
        }else{
            str=dObj.date+"-"+this.monthListShort[dObj.month]+"-"+dObj.year+" "+this.time_12_to_24(dObj.hour)+":"+dObj.minute+" "+this.amPM(dObj.hour);
            return str;
        }
    },
    formatYMDHMS24(dateString){
        var dObj=this.getDate(dateString);
        var str=dObj.year +"-"+dObj.monthZero+"-"+dObj.date+" "+dObj.hour+":"+dObj.minute+":"+dObj.second;
        return str;
    },
    getIstTime(offset){
        d = new Date();
        utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        nd = new Date(utc + (3600000 * offset));
        return nd.getTime();
    },
    setExpireTime(minute){
        var time = 5.5 + minute / 60 / 60;
        return common.getIstTime(time);
    },
    getNextDate(day){
        var newDate = new Date(new Date().getTime()+(day*24*60*60*1000));
        return newDate
    },
    printDateFormatter(){
        return "date-Formatter";
    }
}


//65-10