window.onload = function() {
  var section = document.getElementsByClassName('chosen-tablets')[0];
  
  var tabWrapper = document.getElementsByClassName('tablet-wrapper')[0];
  
  var clrBtn = document.getElementsByClassName('clear')[0];

  // bütün tablet sınıfını topla
  // ve arraye çevir.
  var tablets = [].slice.call(document.getElementsByClassName('tablet'));
  ş
  var chosenTablets = [];
  
  clrBtn.addEventListener('click', function() {
    var spans = [].slice.call(tabWrapper.getElementsByClassName('parent-span'));
    
    for(var i = 0; i < spans.length; i++) {
      tabWrapper.removeChild(spans[i]);
    }
    
    // seçilen tablet arrayini resetle
    chosenTablets.splice(0);
    
    // chosen-tablets div'ini görünmez yap
    section.classList.remove('d-flex');
  });
  
  /* 
  Sayfadaki tabletlere event listener
  ekleme ve fn yaratma bölümü - Başlangıç
  */
  for(var _i = 0; _i < tablets.length; _i++) {
    var el = tablets[_i];
    
    el.addEventListener('click', function() {
      addToTablets(this.innerText);
    })
  }
  
  function addToTablets(keyword) {
    // halihazırda mevcutsa fndan çık
    if(chosenTablets.indexOf(keyword) > -1) return;
    
    chosenTablets.push(keyword);
    
    // chosen-tablets div'ini görünür yap
    section.classList.add('d-flex');
    
    // yeni üyeyi sayfada göster
    displayChosenTablets('added');
  }
  
  function displayChosenTablets(status, ind) {
    if(status === 'added') {
      var len = chosenTablets.length;
      var _i = '';
      if(len > 0) {
        _i = chosenTablets[len - 1];
      } else {
        _i = chosenTablets[0];
      }
      
      var parentSpan = document.createElement('span');
      parentSpan.className = 'parent-span';
      
      var valueSpan = document.createElement('span');
      
      var remSpan = document.createElement('span');
      
      remSpan.addEventListener('click', function() {
        var val = this.previousSibling.innerText;

        removeFromTablets(val);
      });
      
      var val = document.createTextNode(_i);
      
      var remVal = document.createTextNode('×');
      
      valueSpan.className = 'chosen-tablet tablet';
      remSpan.className = 'remove';
      
      valueSpan.appendChild(val);
      remSpan.appendChild(remVal);
      parentSpan.appendChild(valueSpan);
      parentSpan.appendChild(remSpan);
      
      tabWrapper.appendChild(parentSpan);
      
    } else {
      var theEl = tabWrapper.children[ind];
      
      tabWrapper.removeChild(theEl);
      
      if(tabWrapper.childElementCount === 0) {
        section.classList.remove('d-flex');
      }
    }
  }
  
  /*
  Sayfadaki tabletlere event listener
  ekleme ve fn yaratma bölümü - Bitiş
  */
  
  function removeFromTablets(keyword) {
    var ind = chosenTablets.indexOf(keyword);
    
    if(ind === -1) return;
    
    chosenTablets.splice(ind, 1);
    displayChosenTablets('removed', ind);
  }
}