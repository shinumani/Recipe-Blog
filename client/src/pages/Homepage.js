import React from 'react';
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Homepage = () => {
    return (
        <div className="page">
            <h1>Recipe Blog</h1>
            <Carousel>
                <div>
                    <img className='pic' src="./h1.jpg" />
                    <p className="legend">“Cooking is not difficult. Everyone has taste, even if they don’t realize it. Even if you’re not a great chef, there’s nothing to stop you understanding the difference between what tastes good and what doesn’t.”</p>
                </div>
                <div>
                    <img className='pic' src="./h2.jpg" />
                    <p className="legend">“Cooking requires confident guesswork and improvisation—experimentation and substitution, dealing with failure and uncertainty in a creative way.”</p>
                </div>
                <div>
                    <img className='pic' src="./h4.jpg" />
                    <p className="legend">“Cooking is like love. It should be entered into with abandon or not at all.
                   – Harriet Van Horne”</p>
                </div> 
                <div>
                    <img className='pic' src="./h5.jpg" />
                    <p className="legend">“A recipe has no soul. You as the cook must bring soul to the recipe.
                     – Thomas Keller”</p>
                </div>
                <div>
                    <img className='pic' src="./h3.jpg" />
                    <p className="legend">“Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart”</p>
                </div>
                <div>
                    <img className='pic' src="./h6.jpg" />
                    <p className="legend">“Cooking with kids is not just about ingredients, recipes, and cooking. It’s about harnessing imagination, empowerment, and creativity."</p>
                </div>
            </Carousel>
            
            <p>
            Cooking, cookery, or culinary arts is the art, science, and craft of using heat to prepare food for 
            consumption. Cooking techniques and ingredients vary widely, from grilling food over an open fire to 
            using electric stoves, to baking in various types of ovens, reflecting local conditions.
            <br/>
            <br/>
           <h3>The benefits of cooking at home </h3><br/>

           <br/>
Whether you live on your own or are a busy parent, finding the time and energy to prepare home-cooked meals can seem like a daunting task. At the end of a hectic day, eating out or ordering in might feel like the quickest, easiest option. But convenience and processed food can take a significant toll on your mood and health.

Convenience food is typically high in chemical additives, hormones, sugar, salt, unhealthy fat, and calories, all of which can adversely affect your brain and outlook. It can leave you feeling tired, bloated, and irritable, and exacerbate symptoms of depression, stress, and anxiety.

Restaurants often serve more food than you should eat. Many restaurants serve portions that are two to three times larger than the recommended dietary guidelines. This encourages you to eat more than you would at home, adversely affecting your waistline, blood pressure, and risk of diabetes.

When you prepare your own meals, you have more control over the ingredients. By cooking for yourself, you can ensure that you and your family eat fresh, wholesome meals. This can help you to look and feel healthier, boost your energy, stabilize your weight and mood, and improve your sleep
            </p>
           

        </div>
    );
};

export default Homepage;