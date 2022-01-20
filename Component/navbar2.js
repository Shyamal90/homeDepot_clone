function navbar(){
    return `<div class="navbar_container " style="display: grid;grid-template-columns: 30% 50% 20%;">
    <div class="locationTracker">

        <div class="logo" style="margin-left:5%;">
           <a href="../index.html"><img src="https://1000logos.net/wp-content/uploads/2017/02/Home-Depot-Logo.png" alt="logo"></a>
        </div>

        <div id="option" style="margin-left:10%;margin-top:5%;margin-right:5%;">
            <i class="fas fa-bars" style="  color:rgb(255,114,21);font-size:30px"></i>
            <div id="dispdiv" style="border:1px solid red;width:150px;display:none">
                <ul style="list-style-type:none;">
                <li id="allDepartment"><a href="../main/allProducts.html">All Departments</a>
                </li>
                <li><a href="../main/allProducts.html">DIY Projects & Idea</a></li>
                <li><a href="../main/allProducts.html">Home Decor, Furniture & Kitchenware</a></li>
                <li><a href="../main/allProducts.html">Project Calculators</a></li>
                <li><a href="../main/allProducts.html">Installation & Services</a></li>
                <li><a href="../main/allProducts.html">Specials & Offers</a></li>
                <li><a href="../main/allProducts.html">Local Ad & Catalog</a></li>
                </ul>
            </div>
        </div>

        <div class="currnetLocation" style="width:45%">
            <div class="currentLocationBtn" >
                <p>You're shopping</p>
                <h5>Guam - Tamuning</h5>
                <h6><button></button>OPEN <span>until 10 pm</span></h6>
            </div>
            <div class="findLocationResult">
                <div class="box1">
                    <p>Guam - Tamuning # 1710</p>
                </div>
                <div class="box2">
                    <div class="leftBox">
                        <h4>OPEN</h4>
                        <h5>Closes 10 pm</h5>
                        <p>Curbside Available</p>
                         <p>295 Chalan Pasaheru Route 10a</p>
                            <p>Tamuning, GU 96913</p>
                            <p>(671)648-0440</p>
                           <p> View Local Ad</p>
                            <p>View Store Details</p>
                       
                    </div>
                    <div class="rightBox">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgjG37yPyDwQfFDMpErxeMJD-UITAkie7Lg&usqp=CAU" alt="">
                    </div>
                </div>
                <hr>

                <div class="box3">
                   
                    <button>Find Other Stores</button>
                </div>
            </div>
        </div>

        <div class="vertical"></div>

        <!-- Delivery location -->
        <div class="delivery" style=" width:45%;">
            <div class="deliveryBtn">
                <p>Delivering to</p>
                <h6>96913 <img src="" alt=""></h6>
            </div>
            <div class="deliveryResult">
                <div class="box1">
                    <p>Enter delivery ZIP Code</p>
                    <img src="https://assets.thdstatic.com/images/v1/close-symbol-orange.svg">
                </div>

                <div class="box2">
                    <input type="text" placeholder=" Enter Zip Code">
                </div>

                <div class="box3">
                    <button>Update</button>
                </div>
               <hr id="hr1">
                <div class="box4">
                    <div class="imgBox">
                        <img src="https://assets.thdstatic.com/images/v1/truck-icon-orange.svg" alt="">
                    </div>
                    <div class="zipCodeHelp">
                        <p>Your ZIP Code helps us to provide the most up-to-date product and delivery information.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="searchbox" >
        <input type="text" placeholder="What can we help you find today?" id="searchfield">
        <button> <img src="../image/search.svg" alt="search_logo"> </button>
        <div class="searchOption">
            
        </div>
    </div>
    <div class="profileSection">
                    <ul>
                    <li id="myAccount" style="margin-left:10%;"><a href="#"><span id="myProfile"></span>  <img src="../image/person.svg" alt="logo"> </a>
                            <div class="registerform">
                                <div class="registrationBtn">
                                <a href="../main/emailSignIn.html" ><button id="signinBtn">Sign in</button></a>
                                <a href="../main/register.html" ><button id="registerBtn">Register</button></>
                                </div>
                                <hr id="hr3">
                                <div class="otherSections">
                                    <ul>
                                        <li><a href="#"><img src="" alt="">Orders & Purchases</a></li>
                                        <li><a href="#"><img src="" alt="">My Home Depot Credit Card</a></li>
                                        <li><a href="#"><img src="" alt="">Account Profile</a></li>
                                        <li><a href="#"><img src="" alt="">Instant Checkout Setting</a></li>
                                        <li><a href="#"><img src="" alt="">Lists</a></li>
                                        <li><a href="#"><img src="" alt="">My Subscriptions</a></li>
                                        <li><a href="#"><img src="" alt="">Military Discount Program</a></li>
                                        <li id="logOut" style="display: none;"><a href="#"><img src="" alt="">Log out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li style="margin-left:20%;"><a href="list.html"><img src="../image/heart.svg" alt="logo" > </a></li>
                        <li style="margin-left:20%;"><a href="../main/cart.html"><span id="totalItems"></span><img src="../image/cart.svg" alt="logo"> </a></li>
                    </ul>
                </div>
            </div>

            <div class="nav_catagory">
</div>`;
}

export default navbar;