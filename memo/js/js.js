// Load dữ liệu khi trang vừa mở
window.onload = function() {
    loadMemos();
    initializeCloseButtons();
    initializeListClicks();
  };
  
  // Hàm load memos từ localStorage
  function loadMemos() {
    var saved = localStorage.getItem("myMemos");
    if (saved) {
      document.getElementById("myUL").innerHTML = saved;
      initializeCloseButtons();
      initializeListClicks();
    }
  }
  
  // Khởi tạo các nút close
  function initializeCloseButtons() {
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function(e) {
        e.stopPropagation(); // Ngăn sự kiện click lan sang li
        this.parentElement.remove();
        saveMemos();
      }
    }
  }
  
  // Khởi tạo sự kiện click cho li để toggle memo
  function initializeListClicks() {
    var items = document.querySelectorAll('#myUL li');
    for (var i = 0; i < items.length; i++) {
      items[i].onclick = function(e) {
        // Không toggle nếu click vào nút close
        if (e.target.classList.contains('close')) return;
        this.classList.toggle('expanded');
      }
    }
  }
  
  // Lưu memos vào localStorage
  function saveMemos() {
    var content = document.getElementById("myUL").innerHTML;
    localStorage.setItem("myMemos", content);
  }
  
  // Thêm memo mới
  function newElement() {
    var keyValue = document.getElementById("textKey").value.trim();
    var memoValue = document.getElementById("textMemo").value.trim();
    
    if (keyValue === '') {
      Swal.fire({
        icon: "error",
        title: "キーを入力してください！",
      });
      return;
    }
    
    if (memoValue === '') {
      Swal.fire({
        icon: "error",
        title: "メモを入力してください！",
      });
      return;
    }
    
    var li = document.createElement("li");
    
    // Tạo phần Key
    var keySpan = document.createElement("span");
    keySpan.className = "memo-key";
    keySpan.textContent = keyValue;
    li.appendChild(keySpan);
    
    // Tạo phần Memo content
    var memoDiv = document.createElement("div");
    memoDiv.className = "memo-content";
    memoDiv.textContent = memoValue;
    li.appendChild(memoDiv);
    
    // Tạo nút close
    var span = document.createElement("SPAN");
    span.className = "close";
    span.textContent = "×";
    span.onclick = function(e) {
      e.stopPropagation();
      this.parentElement.remove();
      saveMemos();
    };
    li.appendChild(span);
    
    // Click vào li để toggle memo
    li.onclick = function(e) {
      if (e.target.classList.contains('close')) return;
      this.classList.toggle('expanded');
    };
    
    document.getElementById("myUL").appendChild(li);
    document.getElementById("textKey").value = "";
    document.getElementById("textMemo").value = "";
    
    saveMemos();
    
    Swal.fire({
      icon: "success",
      title: "追加しました！",
      timer: 1500,
      showConfirmButton: false
    });
  }