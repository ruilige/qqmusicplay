// 模拟数据
var data = [
    {
        song: '魔鬼中的天使',
        singer: '简弘亦',
        url: 'audio/1.m4a',
        pic: 'img/1.jpg',
        time: '03:57'
    },
    {
        song: '奇妙能力歌',
        singer: '陈粒',
        url: 'audio/2.m4a',
        pic: 'img/2.jpg',
        time: "04:31"
    },
    {
        song: '空空如也',
        singer: '胡66',
        url: 'audio/3.m4a',
        pic: 'img/3.jpg',
        time: "03:31"

    },
    {
        song: 'BBO0M',
        singer: 'MOMOLAND',
        url: 'audio/4.m4a',
        pic: 'img/4.jpg',
        time: "03:28"

    },
    {
        song: 'L.I.E',
        singer: 'EXID',
        url: 'audio/5.m4a',
        pic: 'img/5.jpg',
        time: "03:32"

    },
    {
        song: '眼、鼻、嘴',
        singer: '乐童音乐家',
        url: 'audio/6.m4a',
        pic: 'img/6.jpg',
        time: "03:37"

    },
    {
        song: '200%',
        singer: '乐童音乐家',
        url: 'audio/7.m4a',
        pic: 'img/7.jpg',
        time: "03:13"

    },
    {
        song: 'cheer up',
        singer: 'TWICE',
        url: 'audio/8.m4a',
        pic: 'img/8.jpg',
        time: "03:28"

    },
    {
        song: '血如墨',
        singer: '张碧晨',
        url: 'audio/9.m4a',
        pic: 'img/9.jpg',
        time: "04:05"

    },
    {
        song: 'WHISTLE',
        singer: 'BlackPink',
        url: 'audio/10.m4a',
        pic: 'img/10.jpg',
        time: "03:31"

    }
];
var str = '';
var listSong = document.querySelector('.listsong');
// console.log(listSong);
// 向ul添加内容即是歌名，歌手，时长等
for (var i = 0; i < data.length; i++) {
    str += '<li class="s"><input type="checkbox" name="checkSong" class="square">';
    str += '<span class="songfa">' + data[i].song + '</span>';
    str += '<span class="fa fb">';
    str += '<i class="playlist"><div class="playBtn"></div><div class="stopBtn"></div></i>';
    str += '<i></i>';
    str += '<i></i>';
    str += '</span><span class="singerfa">' + data[i].singer + '</span>';
    str += '<span class="jieshufa">' + data[i].time + '</span>';
    str += '</li>';
}
listSong.innerHTML = str;
// 列表中的歌单名
var lisSongs = document.querySelectorAll('.listsong .songfa');
// console.log(lisSongs)

// 获取aduio的dom元素
var audio = document.querySelector('audio');
// 获取图片
var pic = document.querySelector('.pic');
// 获取背景
var bg = document.querySelector('.bg');
// 获取歌手以及歌名
var songs = document.querySelectorAll('.song');
var singers = document.querySelectorAll('.singer');
// 控制台暂停或播放歌曲
var play = document.querySelector('.play');
var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
// 上一首
var prev = document.querySelector('.prev');
// 下一首
var next = document.querySelector('.next');
// 当前播放的时间
var nowTime = document.querySelector('.nowtime');
// 音频的总时间
var jieShu = document.querySelector('.jieshu');
// 音乐的底部的dom元素
var zongChangDu = document.querySelector('.zongchangdu');
// 音乐控制条的上的小圆点
var circle = document.querySelector('.circle');
// 获取播放列表的
var playOrder = document.querySelector('.playorder')
var tip = document.querySelector('.tip');
// 音乐的进度条
var progressMusic = document.querySelector('.hou');
// 获取播放列表的播放的ul
var orderList = document.querySelector('.orderList');
// 获取ul下的li
var lis = document.querySelectorAll('.orderList li');
// 获取model即是播放模式
var models = document.querySelectorAll('.model');
// console.log(progressMusic)
// 包裹着滚动条的大盒子
var wrapDiv = document.querySelector('.wrap');
// 滚动条
var slider = document.querySelector('#slider');
var sliderWrap = document.querySelector('#sliderWrap');
// 控制台喜欢音乐的部分
var loveSong = document.querySelector('.loveSong');
var love = document.querySelector('.love');
var red = document.querySelector('.red');
// 音量的部分
var voice = document.querySelector('.voice');
var voice1 = document.querySelector('.voice1');
var voice2 = document.querySelector('.voice2');
// 音量的底部进度条
var voiceSound = document.querySelector('.voiceSound');
// 音量的小圆圈
var voiceCircle = document.querySelector('.voiceCircle');
// 音量的进度条
var voiceLine = document.querySelector('.voiceLine');
// checkbox的选项框
var checkSong = document.getElementsByName('checkSong');
var checkAllSong = document.getElementsByName('checkAllSong')[0];
// 歌曲列表的按钮
var playBtn = document.querySelectorAll('.playBtn');
var stopBtn = document.querySelectorAll('.stopBtn');
var playlist = document.querySelectorAll('.playlist');

// console.log(playlist)
// 控制索引值
var index = 0;
// 歌曲默认的播放模式为列表循环
var state = 0;

// 获取dada的数据，就是初始化数据
function init() {
    audio.src = data[index].url;
    pic.src = data[index].pic;
    bg.style.background = 'url(' + data[index].pic + ') no-repeat left center';
    bg.style.backgroundSize = 'cover';
    for (var i = 0; i < songs.length; i++) {
        songs[i].innerHTML = data[index].song;
        singers[i].innerHTML = data[index].singer;
    }
}

// 页面已加载就获取数据
init();

// 播放音乐的函数
function playMusic() {
    audio.play();
}

//让暂停和播放显示或隐藏的函数
function showHiddenStyle(obj, flag) {
    // 当flag为true的时候为none让他不显示，为false的时候为block
    flag = flag ? 'none' : 'block';
    obj.style.display = flag;
}
// 点击play可以暂停或播放歌曲
play.addEventListener('click', function () {
    if (audio.paused) {
        playMusic();
        showHiddenStyle(start, true);
        showHiddenStyle(stop, false);
        showHiddenStyle(playBtn[index], false);
        showHiddenStyle(stopBtn[index], true);
    } else {
        audio.pause();
        showHiddenStyle(start, false);
        showHiddenStyle(stop, true);
        showHiddenStyle(playBtn[index], true);
        showHiddenStyle(stopBtn[index], false);
    }
});
// 点击上一首歌曲播放
prev.addEventListener('click', function () {
    index--;
    index = index < 0 ? data.length - 1 : index;
    init();
    playMusic();
    showHiddenStyle(start, true);
    showHiddenStyle(stop, false);
});
// 点击下一首歌曲歌曲
next.addEventListener('click', function () {
    index++;
    index = index > data.length - 1 ? 0 : index;
    init();
    playMusic();
    showHiddenStyle(start, true);
    showHiddenStyle(stop, false);
});

// 当时间的小于9的时候，就加上0
function addZero(time) {
    return time < 10 ? '0' + time : time;
}

// 对播放音乐的时间的分钟以及秒数
function setTime(time) {
    var totalSecond = addZero(parseInt(time % 60));
    var totalMinute = addZero(parseInt(time / 60));
    return totalMinute + ':' + totalSecond;
}

// 获取可以移动的距离
var subDis = zongChangDu.offsetWidth - circle.offsetWidth;
// 当音频准备好可以播放的时候可以获取播放的总时间
audio.addEventListener('canplay', function () {
    // 获取播放的总时间
    jieShu.innerHTML = '/&nbsp;&nbsp;&nbsp;&nbsp;' + setTime(audio.duration);
    // 当播放时间更新的时候出发的事件
    audio.addEventListener('timeupdate', function (e) {
        // 获取当前播放的时间
        nowTime.innerHTML = setTime(audio.currentTime);

        // 获取可以移动的距离和时间对应起来
        var left = audio.currentTime / audio.duration * subDis;
        // 让小圆点向向左移动
        circle.style.left = left + 'px';
        // 让进度条变长
        progressMusic.style.width = (left + circle.offsetWidth / 2) + 'px';
        if (audio.ended) {
            model();
        }
    })
});
// 点击总的进度条的时候可以让歌曲快进或后退
zongChangDu.addEventListener('click', function (e) {
    // 获取当前播放的时间
    var playCurrentTime = e.offsetX / zongChangDu.offsetWidth * audio.duration;
    // 并把当前的时间赋值给audio.currentTime
    audio.currentTime = playCurrentTime;
    // 当音乐没有播放的时候点击进度条底部就播放音乐
    playMusic();
    // 并且让播放的样式播放
    showHiddenStyle(start, true);
    showHiddenStyle(stop, false);
    return false;
});
// 点击进度条也可以实现快进或后退
progressMusic.addEventListener('click', function (e) {
    // 获取当前播放的时间
    var playCurrentTime = e.offsetX / zongChangDu.offsetWidth * audio.duration;
    // 并把当前的时间赋值给audio.currentTime
    audio.currentTime = playCurrentTime;
    // 当音乐没有播放的时候点击进度条底部就播放音乐
    playMusic();
    // 并且让播放的样式播放
    showHiddenStyle(start, true);
    showHiddenStyle(stop, false);
    return false;
});

// 鼠标抬起的事件的函数
function mousup(obj) {
    window.onmouseup = function () {
        //取消document的onmousemove事件
        window.onmousemove = null;
        //取消document的onmouseup事件
        window.onmouseup = null;
        //当鼠标松开时，取消对事件的捕获
        obj.releaseCapture && obj.releaseCapture();
        return false;
    }
}
// 小圆点的拖拽事件，可以实现鼠标的的拖拽
circle.onmousedown = function (e) {
    var e = e || window.e;
    var disX = e.clientX - circle.offsetLeft;
    window.onmousemove = function (e) {
        var e = e || window.e;
        var left1 = e.clientX - disX;
        var playCurrentTime = left1 / zongChangDu.offsetWidth * audio.duration;
        audio.currentTime = playCurrentTime;
        // 当音乐没有播放的时候点击进度条底部就播放音乐
        playMusic();
        showHiddenStyle(start, true);
        showHiddenStyle(stop, false);
        return false;
    };
    mousup(circle);
};
// 为了提示文字进行显示
playOrder.addEventListener('mouseenter', function () {
    tip.style.visibility = 'visible';
    tip.style.backgroundColor = '#fff'
});
// 移除的时候让提示的文字他隐藏
playOrder.addEventListener('mouseleave', function () {
    tip.style.visibility = 'hidden';


});
// 点击列表循环可以实现歌曲的播放模式
playOrder.addEventListener('click', function () {
    showHiddenStyle(orderList, false);
    orderList.addEventListener('click', function (e) {
        // console.log(e.target.nodeName.toLowerCase());
        state = e.target.dataset.index1;
        console.log(state)
        if (e.target.nodeName.toLowerCase() === 'li') {
            showHiddenStyle(orderList, true);
            for (var i = 0; i < models.length; i++) {
                showHiddenStyle(models[i], true)
            }
            showHiddenStyle(models[state], false)
        }
    })
});
// 点几全选按钮，让所有的checkSong选中
checkAllSong.onclick=function () {
    console.log(1)
    for(var i=0;i<checkSong.length;i++){
        checkSong[i].checked=checkAllSong.checked;
    }
};
// 歌曲的选择，如果都选了则checkAllSong画上对号，否则则没有
function checkSongH() {
    for (var i = 0; i < checkSong.length; i++) {
        checkSong[i].onclick = function () {
            // checkAllSong选上，
            checkAllSong.checked = true;
            // 如果其中的任意一项没有选则checkAllSong不能画上对号
            for (var j = 0; j < checkSong.length; j++) {
                if (!checkSong[j].checked) {
                    checkAllSong.checked = false;
                    break;
                }
            }
        }
    }
}
// 点击歌单列表的歌名时候，可以让音乐播放
function playListSong() {
    for (var i = 0; i < lisSongs.length; i++) {
        lisSongs[i].index = i;
        lisSongs[i].addEventListener('click', function () {
            index = this.index;
            init();
            playMusic();
            // 改变playlist的其他按钮的的样式,就是把所有的的按钮为暂停的样式
            for (var j = 0; j < lisSongs.length; j++) {
                showHiddenStyle(playBtn[j], true);
                showHiddenStyle(stopBtn[j], false);
            }
            // 让控制台的按钮也改变
            showHiddenStyle(start, true);
            showHiddenStyle(stop, false);
            // 让歌曲列表的控制按钮也改变，让暂停按钮不显示，播放按钮显示
            showHiddenStyle(playBtn[index], false);
            showHiddenStyle(stopBtn[index], true);

        });
    }

}
playListSong();

var playIndex = -1;
//点击playlist中的按钮可以实现歌曲的播放和暂停
function playListBtn() {
    for(var i=0;i<playlist.length;i++){
        playlist[i].index=i;
        playlist[i].onclick=function () {
            // 这是把之前点击的状态给清除，就是当前的歌曲正在播放，
            // 点击下一首就让下一首的歌曲播放，并且让之前的哪一首的按钮变为暂停状态
            for(var j=0;j<lisSongs.length;j++){
                showHiddenStyle(playBtn[j],true);
                showHiddenStyle(stopBtn[j],false);
            }
            // 如果playIndex的值不等于当前播放音乐的索引值，
            // 就不管之前的播放状态，直接让点击的那一播放
            if(playIndex===this.index){
                playIndex=this.index;
                if(audio.paused){
                    index=this.index;
                    showHiddenStyle(start,true);
                    showHiddenStyle(stop,false);
                    showHiddenStyle(playBtn[index],false);
                    showHiddenStyle(stopBtn[index],true);
                    init();
                    playMusic();
                }else {
                    audio.pause();
                    showHiddenStyle(start,false);
                    showHiddenStyle(stop,true);
                    showHiddenStyle(playBtn[index],true);
                    showHiddenStyle(stopBtn[index],false);
                }
                // 就不管之前的播放状态，直接让点击的那一首歌曲播放
            }else {
                showHiddenStyle(start,true);
                showHiddenStyle(stop,false);
                index=this.index;
                showHiddenStyle(playBtn[index],false);
                showHiddenStyle(stopBtn[index],true);
                init();
                playMusic();
                playIndex=this.index;
            }
        }
    }
}
playListBtn();
// 实现歌曲的播放的模式的函数
function model() {
    // 0是顺序，1是随机，2是单曲，3是列表循环
    if (state == 0) {
        index++;
        index = index > data.length - 1 ? 0 : index;
        init();
        playMusic()
    } else if (state == 1) {
        index = Math.floor(Math.random() * data.length);
        init();
        playMusic();
    } else if (state == 2) {
        playMusic();
    } else if (state == 3) {
        index++;
        index = index > data.length - 1 ? 0 : index;
        init();
        playMusic()
    }
}

// 合理设置滚动条的的高度
function sliderHeight() {
    // 设置比例
    var scale = wrapDiv.clientHeight / listSong.clientHeight
    // console.log(scale);
    // 设置滑块的高度
    var h1 = sliderWrap.clientHeight * scale;
    // 为了合理的设置滑块高度
    if (h1 < 50) {
        h1 = 50;
    } else if (scale > 1) {
        //说明当前内容能过完全显示在可视区域内，不需要滚动条
        showHiddenStyle(sliderWrap, true)
    }
    slider.style.height = h1 + 'px';
}

// 调用这个函数
sliderHeight();
// 设置y轴的增量
var y = 0;
// 滚动条的滚轮事件
wrapDiv.onmousewheel = function (e) {
    var e = e || window.e;
    if (e.wheelDelta < 0) {
        // 滑轮向下滚动
        y += 3;
    } else if (e.wheelDelta > 0) {
        // 鼠标向上滚动
        y -= 3;
    }
    sliderDis(y);
};
// 滑块可以拖拽的函数
slider.onmousedown = function (e) {
    // 为了浏览器的兼容性
    var e = e || window.e;
    // 用鼠标y的位置-滚动条的距离滚动条底部的距离的位置=上面的小的滚动条的偏移量
    var disy = e.clientY - slider.offsetTop;
    window.onmousemove = function (e) {
        var e = e || window.e;
        // 因为鼠标在不停的移动，y的值在不停的变化
        //top为slider可以移动的距离
        var top = e.clientY - disy;
        sliderDis(top);
        return false;

    }
    mousup(slider)
};

// 滑块移动的距离，以及ul可以滚动的距离
function sliderDis(top) {
    //top变化时说明在滚动，此时使滚动条发生滚动，以及设置content内容部分滚动
    //判断极端情况，滑块不能划出屏幕
    // 限制移动的范围
    top = top < 0 ? 0 : top;
    var topMax = sliderWrap.clientHeight - slider.clientHeight;
    top = top > topMax ? topMax : top;
    // slider移动可移动的距离
    slider.style.top = top + 'px';
    // 获取移动的距离除以可以移动的最大距离，就是ul可移动的百分比
    var percents = top / topMax;
    // 这是ul可以滚动的距离
    var cony = percents * (listSong.clientHeight - wrapDiv.clientHeight);
    listSong.style.top = -cony + 'px';
}

// 保存的现在的状态
var bb = 1;
loveSong.onclick = function () {
    if (bb == 1) {
        showHiddenStyle(red, false);
        showHiddenStyle(love, true);
        // red.style.display='block';
        // love.style.display='none';
        bb = 0;
    } else if (bb == 0) {
        showHiddenStyle(red, true);
        showHiddenStyle(love, false);
        // red.style.display='none';
        // love.style.display='block';
        bb = 1
    }
};
// 音量的事件
var volume = 0.5;
audio.volume=volume
// 音量的拖拽事件
voiceCircle.onmousedown = function (e) {
    var e = e || window.e;
    var voiceLeft = e.clientX - voiceCircle.offsetLeft;
    window.onmousemove = function (e) {
        var e = e || window.e;
        // 可以移动的距离即是偏移量
        var left = e.clientX - voiceLeft;
        var maxValue2 = voiceSound.offsetWidth;
        // 限制音量的移动的范围
        left = left < 0 ? 0 : left;
        left = left > maxValue2 ? maxValue2 - voiceCircle.offsetWidth : left;
        // 让移动的距离除以总的距离，就是音量的百分比，又因为音量的取值范围为0-1
        volume = left / maxValue2;
        // 把volume赋值给audio.volume
        audio.volume = volume;
        voiceCircle.style.left = left + 'px';
        voiceLine.style.width = left + 'px';
        // showHiddenStyle(voice1,false);
        // showHiddenStyle(voice2,true);
         volumeJudge()
        return false;
    }
    mousup(voiceCircle);

};
function volumeJudge() {
    if(audio.volume >0 ||audio.volume <1){
        showHiddenStyle(voice1,false);
        showHiddenStyle(voice2,true);

    }else if(audio.volume=0){
        // showHiddenStyle(voice1,false);
        // showHiddenStyle(voice2,true);
        showHiddenStyle(voice1,true);
        showHiddenStyle(voice2,false);
    }
}

// 音量的点击事件
voiceLine.addEventListener('click', function (e) {
    var e = e || window.e;
    // left1和lefe的数值是相等的
    // var left=e.offsetX;
    var left = e.clientX - voiceSound.offsetLeft;
    voiceCircle.style.left = left + 'px';
    voiceLine.style.width = left + 'px';
    volume = left / voiceSound.offsetWidth;
    audio.volume = volume;
    volumeJudge()

});

// 保存音量的状态，如果为真就让静音显示,目的就是切换两种状态
var flag=true;
// 点击音量的voice的按钮
voice.addEventListener('click',function () {
    if(flag){
       // 让音量不显示，让静音的图片展示
        showHiddenStyle(voice1,true);
        showHiddenStyle(voice2,false);
        volume=0;
        audio.volume = volume;
        voiceCircle.style.left = 0 + 'px';
        voiceLine.style.width = 0 + 'px';
        // 再让他的状态为false，就可以切换到下一个状态
      flag=false;
    }else {
        // 当为false的时候让音量显示，让静音不显示
        showHiddenStyle(voice1,false);
        showHiddenStyle(voice2,true);
        volume=0.5;
        audio.volume = volume;
        voiceCircle.style.left = 60 + 'px';
        voiceLine.style.width = 60 + 'px';
        // 当音量不是静音的时候，再变为true
        flag=true;
    }
    console.log(voiceCircle.style.left)


});

