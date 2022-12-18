
$(document).ready(function () {
    const des = $('.icons')[0].getBoundingClientRect().width * 0.5,
          ides = $('#add')[0].getBoundingClientRect().width * 0.5,
          RtD = Math.PI/180,
          xArr = [],
          yArr = [],
          options = $('option').length;
    var iconLen, deg, website;
  
    setPosition();
  
    $('#add').click(function(){
      showSelect()
    })
  
    $('#website').on('change', function () {
      create()
      setPosition()
      hideSelect()
      if (iconLen == options) {
          $('#add').prop('disabled', true);
          $('.fa-plus').addClass('disabled');
      }
    })
  
    function showSelect() {
        $('#website').css({
          'transform': 'translate(-50%, 350%)',
          'opacity': 1
        })
    }
    function hideSelect() {
      $('#website').css({
        'transform': 'translate(-50%, 0%)',
        'opacity': 0
      })
    }
  
    function create() {
      website = $('#website').val();
      if (website != 0) {
        let elment = document.createElement('i');
        elment.classList.add('fa-brands');
        elment.classList.add('fa-'+website);
        $('.icons').append(elment);
        $('#website option[value='+website+']').remove();
      } else {
          alert('Please Select Application!');
      }
    }
  
    function setPosition () {
      let children = $('.icons')[0].children;
      var arrchildren = [].slice.call(children);
      iconLen = arrchildren.length;
      deg = 360 / iconLen;
  
      for (i = 0; i < iconLen; i++) {
  
          $(arrchildren[i])
          .css({
              "--deg": i * deg,
          })
      
          xArr[i] = (Math.cos(parseInt(arrchildren[i].style.getPropertyValue('--deg'))*RtD) * des).toFixed();
          yArr[i] = (Math.sin(parseInt(arrchildren[i].style.getPropertyValue('--deg'))*RtD) * des).toFixed();
      
          $(arrchildren[i])
          .css({
              "transform": 'translate('+(xArr[i]-ides)+'px,'+(-yArr[i]-ides)+'px) rotateZ(90deg)',
          })
          
        }
    }
  
  });