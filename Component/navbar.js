function navbar(){
    return `<div class="navbar_container">
    <div class="locationTracker">

        <div class="logo">
           <a href="../index.html"><img src="https://1000logos.net/wp-content/uploads/2017/02/Home-Depot-Logo.png" alt="logo"></a>
        </div>

        <div class="currnetLocation">
            <div class="currentLocationBtn">
                <p>You're shopping</p>
                <h5>Guam - Tamuning</h5>
                <h6><button></button>OPEN <span>unit 10 pm</span></h6>
            </div>
            <div class="findLocationResult">
                <div class="box1">
                    <p>Guam - Tamuning#1710</p>
                </div>
                <div class="box2">
                    <div class="leftBox">
                        <h4>OPEN</h4>
                        <h5>Closes 10 pm</h5>
                        <p>Curbside Available</p>
                        <p>295 Chalan Pasaheru Route 10a
                            Tamuning, GU 96913
                            (671)648-0440
                            View Local Ad
                            View Store Details
                        </p>
                    </div>
                    <div class="rightBox">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgjG37yPyDwQfFDMpErxeMJD-UITAkie7Lg&usqp=CAU" alt="">
                    </div>
                </div>

                <div class="box3">
                    <button>Find Other Stores</button>
                </div>
            </div>
        </div>

        <div class="vertical"></div>

        <!-- Delivery location -->
        <div class="delivery">
            <div class="deliveryBtn">
                <p>Delivering to</p>
                <h6>96913 <img src="" alt=""></h6>
            </div>
            <div class="deliveryResult">
                <div class="box1">
                    <p>Enter delivery ZIP Code</p>
                </div>

                <div class="box2">
                    <input type="text" placeholder="Enter Zip Code">
                </div>

                <div class="box3">
                    <button>Update</button>
                </div>
                <hr>
                <div class="box4">
                    <div class="imgBox">
                        <img src="" alt="">
                    </div>
                    <div class="zipCodeHelp">
                        <p>Your ZIP Code helps us to provide the most up-to-date product and delivery information.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="searchbox">
        <input type="text" placeholder="What can we help you find today?" id="searchfield">
        <button> <img src="../image/search.svg" alt="search_logo"> </button>
        <div class="searchOption">
            
        </div>
    </div>
    <div class="profileSection">
        <ul>
            <li id="myAccount"><a href="#"> My Account <img src="../image/person.svg" alt="logo"> </a>
                <div class="registerform">
                    <div class="registrationBtn">
                        <button id="signinBtn">Sign in</button>
                        <button id="registerBtn">Register</button>
                    </div>
                    <div class="otherSections">
                        <ul>
                            <li><a href="#"><img src="" alt=""> Orders & Purchases</a></li>
                            <li><a href="#"><img src="" alt="">My Home Depot Credit Card</a></li>
                            <li><a href="#"><img src="" alt="">Account Profile</a></li>
                            <li><a href="#"><img src="" alt="">Instant Checkout Setting</a></li>
                            <li><a href="#"><img src="" alt="">Lists</a></li>
                            <li><a href="#"><img src="" alt="">My Subscriptions</a></li>
                            <li><a href="#"><img src="" alt="">Military Discount Program</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li><a href="list.html">Lists <img src="../image/heart.svg" alt="logo"> </a></li>
            <li><a href="#">Cart <span>|6 items</span> <img src="../image/cart.svg" alt="logo"> </a></li>
        </ul>
    </div>
</div>

<div class="nav_catagory">
    <ul>
        <li id="allDepartment"><a href="#">All Departments</a>
            <div class="allDepartment_list">
                <ul>
                    <li><a href="#">Holiday Decorations</a></li>
                    <li><a href="#">Appliances</a></li>
                    <li><a href="#">Bath & Faucets</a></li>
                    <li><a href="#">Blinds & Window Treatment</a></li>
                    <li><a href="#">Building Materials</a></li>
                    <li><a href="#">Cleaning</a></li>
                    <li><a href="#">Decor & Furniture</a></li>
                    <li><a href="#">Doors & Windows</a></li>
                    <li><a href="#">Electrical</a></li>
                    <li><a href="#">Flooring & Area Rugs</a></li>
                    <li><a href="#">Hardware</a></li>
                    <li><a href="#">Heating & Cooling</a></li>
                    <li><a href="#">Kitchen & Kitchenware</a></li>
                    <li><a href="#">Lawn & Garden</a></li>
                    <li><a href="#">Lighting & Ceiling Fans</a></li>
                    <li><a href="#">Outdoor Living & Patio</a></li>
                    <li><a href="#">Paint</a></li>
                    <li><a href="#">Plumbing</a></li>
                    <li><a href="#">Smart Home</a></li>
                    <li><a href="#">Storage & Organization</a></li>
                    <li><a href="#">Tools</a></li>
                </ul>
            </div>
        </li>
        <li><a href="">Home Decor, Furniture & Kitchenware</a></li>
        <li><a href="">DIY Projects & Idea</a></li>
        <li><a href="">Project Calculators</a></li>
        <li><a href="">Installation & Services</a></li>
        <li><a href="">Specials & Offers</a></li>
        <li><a href="">Local Ad & Catalog</a></li>
    </ul>
</div>`;
}

export default navbar;