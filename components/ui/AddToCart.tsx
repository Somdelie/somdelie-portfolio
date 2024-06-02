import React from "react";

const AddToCart = () => {
  return (
    <div className="card6">
      <div className="image">
        {/* <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="800px" height="800px" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 2048 2048" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="Layer_x0020_1">
    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
    <g id="_439855472">
      <path className="fil0" fill="#880E4F" d="M797 360c17,1 45,-73 56,-61 91,99 275,90 340,2 15,-21 32,66 58,59l0 427 -455 0 0 -427z"></path>
      <path className="fil0" fill="#880E4F" d="M1787 1586c2,39 3,77 5,111l1 33 -33 0 -192 0 -30 0 -1 -31 -5 -114 257 0z"></path>
      <path className="fil0" fill="#880E4F" d="M517 1586l-5 114 -1 31 -30 0 -192 0 -33 0 1 -33c1,-34 3,-72 5,-111l257 0z"></path>
      <path className="fil1" fill="#C72464" d="M1236 355c99,2 284,19 330,120 37,82 68,153 94,221 26,69 47,133 64,200 20,79 35,225 46,384 7,103 12,212 17,311l-257 0 -28 -595 -61 -153 0 777 0 0c0,36 -15,69 -39,93 -24,24 -57,39 -93,39l-568 0c-36,0 -69,-15 -93,-39 -24,-24 -39,-57 -39,-93l0 -776 -61 153 -28 595 -257 0c4,-99 10,-209 17,-311 11,-159 25,-305 46,-384 17,-67 38,-132 64,-200 26,-68 57,-140 94,-221 21,-46 68,-73 120,-90 64,-20 142,-28 209,-32 5,126 98,227 212,227 113,0 206,-100 212,-225z"></path>
      <path className="fil2" fill="#780B45" fill-rule="nonzero" d="M1011 625c-128,0 -207,-158 -205,-271l21 -33c18,-27 30,-35 32,-7 7,88 55,221 165,230l-13 81z"></path>
      <path className="fil2" fill="#780B45" fill-rule="nonzero" d="M1037 625c128,0 207,-158 205,-271l-21 -33c-18,-27 -30,-35 -32,-7 -7,88 -55,221 -165,230l13 81z"></path>
      <g>
        <polygon className="fil0" fill="#880E4F" points="1051,776 972,776 955,1108 1121,1243"></polygon>
        <polygon className="fil3" fill="#F06292" points="1121,1242 1130,1307 955,1497 976,1124"></polygon>
        <polygon className="fil3" fill="#F06292" points="982,608 1060,608 1097,816 955,1108"></polygon>
      </g>
      <g>
        <path className="fil4" fill="#FF6D00" d="M916 584c44,20 90,37 90,48 0,12 -46,48 -90,48 -44,0 -30,-22 -30,-48 0,-27 -14,-69 30,-48z"></path>
        <path className="fil4" fill="#FF6D00" d="M1140 584c-44,20 -90,37 -90,48 0,12 46,48 90,48 44,0 30,-22 30,-48 0,-27 14,-69 -30,-48z"></path>
      </g>
      <ellipse className="fil5" fill="#E65100" cx="1025" cy="632" rx="44" ry="43"></ellipse>
    </g>
    <rect fill="none" width="2048" height="2048"></rect>
  </g>
</svg> */}
      </div>
      <div className="productTitle">Tunica Formale</div>
      <div className="cost">$123.49</div>
      <div className="radio-inputs">
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">S</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">M</span>
        </label>

        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">L</span>
        </label>

        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">XL</span>
        </label>

        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">XXL</span>
        </label>
      </div>
      <button className="addtocart">Add to Cart</button>
    </div>
  );
};

export default AddToCart;
