class Timer{
    /*
    *  @params  end 结束的时间
    *  @params  update 时间更新的回调
     * @params  handle  倒计时结束以后的回调函数
    * */
    countdown(end,update,handle){
        const now =now.Date.getTime();
        const self = this;
        if(now-end){
            hadle.call(self)
        }else{
            let last_time = end-now; //剩余时间
            let px_d = 1000*60*60*24;  //一天的时间
            const px_h = 1000*60*60; //一小时的时间
            const px_m = 1000*60;  //一分钟的时间
            const px_s =1000;  //一秒钟的毫秒数
            let d = Math.floor(last_time/px_d); //剩余天数
            let h = Math.floor((last_time-d*px_d)/px_h);//剩余的小时数
            let m = Math.floor((last_time-d*px_d-h*px_h)/px_m);//剩余的分钟数
            let s = Math.floor((last_time -d*px_d-h*px_h-m*px_m)/px_s);//剩余的秒数
            let r =[];
            if(d>0){
                r.push(`<em>${d}</em>天`)
            }
            if(r.length || (h>0)){
                r.push(`<em>${h}</em>时`)
            }
            if(r.length || m>0){
                r.push(`<em>${m}</em>分`)
            }
            if(r.length || s>0){
                r.push(`<em>${s}</em>秒`)
            }
            self.last_time = r.join('');
            upDate.call(self,r.join(''));
            setTimeout(function(){
               self.countdown(end,update,handle)
            },1000)
        }
    }
}
export default  Timer;