var prev = document.getElementById("1");

function addAnswer(obj, text)
            {
                var object = obj.parentElement;
                var newP = document.createElement("p"); //p태그 생성
                if(obj != object.lastElementChild)  //마지막 자식이 아니면 리턴
                    return;
                else
                {
                    newP.innerHTML = text;  //마지막이면 text를 생성
                    object.appendChild(newP);
                }
                newP.onclick = function()   //text를 눌렀을 때 제거
                {
		            var p = this.parentElement; // 부모 HTML 태그 요소
		            p.removeChild(this); // 자신을 부모로부터 제거
	            };
                
            }