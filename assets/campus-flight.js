(() => {
  const root=document.documentElement;
  let map,tiles,marker,active=false,timer,arrivalTimer,run=0;
  const tower=[51.49835,-0.17694];
  const layer=document.getElementById('campus-flight');
  const caption=document.getElementById('campus-caption');
  function finish(){if(!active)return;active=false;clearTimeout(timer);clearTimeout(arrivalTimer);window.dispatchEvent(new Event('campus-arrived'));}
  window.startCampusFlight=()=>{
    if(active)return;active=true;const generation=++run;
    if(!window.L){finish();return;}
    try{
      if(!map){
        map=L.map('campus-map',{zoomControl:false,attributionControl:true,dragging:false,scrollWheelZoom:false,doubleClickZoom:false,touchZoom:false,keyboard:false,boxZoom:false,zoomSnap:0,zoomAnimation:true});
        tiles=L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,maxNativeZoom:19,keepBuffer:3,updateWhenZooming:true,attribution:'Imagery © Esri, Maxar, Earthstar Geographics, and the GIS User Community'}).addTo(map);
      }
      layer.hidden=false;map.invalidateSize();map.setView(tower,5,{animate:false});
      if(marker){map.removeLayer(marker);marker=null;}
      caption.textContent='London, United Kingdom';
      let launched=false;
      const launch=()=>{
        if(launched||!active||generation!==run)return;launched=true;
        root.classList.add('campus-flying');
        map.once('moveend',()=>{
          if(!active||generation!==run)return;
          const reveal=()=>{
            if(!active||generation!==run||marker)return;
            caption.textContent='Queen’s Tower · Imperial College London · South Kensington';
            marker=L.circleMarker(tower,{radius:8,color:'#fff',weight:2,fillColor:'#2563eb',fillOpacity:.75}).addTo(map);
            arrivalTimer=setTimeout(finish,1800);
          };
          if(!tiles.isLoading())reveal();else {tiles.once('load',reveal);arrivalTimer=setTimeout(reveal,2200);}
        });
        map.flyTo(tower,19,{duration:6,easeLinearity:.2});
      };
      if(!tiles.isLoading())launch();else tiles.once('load',launch);
      timer=setTimeout(()=>{caption.textContent='Continue to homepage';finish()},16000);
    }catch{finish();}
  };
  window.resetCampusFlight=()=>{active=false;run++;clearTimeout(timer);clearTimeout(arrivalTimer);map?.stop();root.classList.remove('campus-flying');layer.hidden=true;};
})();
