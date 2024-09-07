			//获取视频对象
			var vid = document.getElementById("vd");
            var vplay = document.getElementById("btn")
            vplay.onclick = function(){
            	vid.play()
            }
			//       音频循环播放列表
			var vlist = ["Mp3/爱的纪念.mp3", "Mp3/水边的阿狄丽娜.mp3", "Mp3/童年的回忆.mp3", "Mp3/献给爱丽丝.mp3", "Mp3/爱的谐奏曲.MP3", "Mp3/贝古依奈的出发.mp3", "Mp3/儿时回忆.mP3", "Mp3/记忆.mp3", "Mp3/拉。梅而.mp3" ];
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