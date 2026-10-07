    const map = new mapboxgl.Map({
        accessToken: mapToken,
        container: 'map', // container ID
        center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });



    // create a marker at a coordinate
    const marker = new mapboxgl.Marker({color: "red" })
      .setPopup(new mapboxgl.Popup({offset: 25 })
      .setHTML(`<h3>${listing.title}</h3><p>Exact Location will be provided after booking</p>`))
      .setLngLat(listing.geometry.coordinates)
      .addTo(map);




    // const el = document.createElement('div');
    // el.className = 'custom-marker';
    // el.innerHTML = `
    // <i class="fa-regular fa-house fa-2xl" style="color: rgb(237, 12, 12);cursor: pointer" ></i>`;

    // create a custom marker element
    // const el = document.createElement('div');
    // // add a class or style to the element
    // const img = document.createElement("img");
    // img.src = "/uploads/house-regular.png";
    // img.style.width = "40px";
    // img.style.height = "40px";
    // img.style.objectFit = "contain";

    // el.appendChild(img);

    // el.style.width = "40px";
    // el.style.height = "40px";
    // el.style.cursor = "pointer";