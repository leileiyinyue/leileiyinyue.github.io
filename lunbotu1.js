
			//获取视频对象
			var vid = document.getElementById("vd");
                                                  // 实现息屏播放
                                                 document.addEventListener('visibilitychange',()=>{
                                                  if(document.hidden && !vid.paused) {
                                                   vid.pause();
                                                 }else if(!document.hidden &&vid.paused){
                                                  vid.play();
                                                }
                                               });
            var vplay = document.getElementById("btn")
            vplay.onclick = function(){
            	vid.play()
            }
			//       音频循环播放列表
			var vlist = ["Mp3/一剪梅.mp3", "Mp3/不羁放纵爱自由.mp3", "Mp3/多少柔情多少梦.mp3", "Mp3/该死的卑微.mp3", "Mp3/孟婆的忘情汤.mp3", "Mp3/飘雪.mp3", "Mp3/人生何处不相逢 .mp3", "Mp3/山楂树之恋.mp3", "Mp3/太阳.mp3", "Mp3/天之大.mp3", "Mp3/我爱你入骨，你骗我成瘾.mp3", "Mp3/新欢渡旧爱.mp3","Mp3/一言难尽.mp3","Mp3/余生是你，晚点没关系.mp3","Mp3/月半小夜曲.mp3","Mp3/月亮.mp3" ];
				var k = 0;
			
			//点击切换到下一个资源
			document.getElementById("btn2").onclick = function() {
				k++;
				if(k == vlist.length) {
					k = 0;
				}
				vid.src = vlist[k];
				vid.play();

			}

			//点击切换到上一个资源
			document.getElementById("btn1").onclick = function() {
				k--;
				if(k < 0) {
					k = vlist.length - 1;
				}
				vid.src = vlist[k];
				vid.play();

			}
			var k = 0; //初始播放视频索引
			vid.onended = function() {
				k++;
				if(k == vlist.length) {
					k = 0;
				}
				vid.src = vlist[k];
				vid.play();
			}