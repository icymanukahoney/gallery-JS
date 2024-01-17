//start our animation library (AOS)
AOS.init();

// Declare element variables
const modalFirst = document.getElementById("modal-first");
const closeButtonGreeting = document.getElementById("close-button-greeting");
const swiperContainer = document.getElementById("swiper-container");

// Define gallery data
let mainGallery = [
  {
    image_gallery: [
      "https://www.vincentvangogh.org/images/paintings/the-starry-night-over-the-rhone.jpg",
      "https://lh3.googleusercontent.com/7aJyS2Nd7c8oCJKmfXlmM-rnSnLMY0ykfBFOP8N3OjV6M4hbhS_NEg8tH6SJDfvl=s1200",
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Walentin_Alexandrowitsch_Serow_Girl_with_Peaches.jpg",
      "https://avatars.dzeninfra.ru/get-zen_doc/1884623/pub_5dde823f05dde27f8d3c26a1_5ddef1c0cfa4bb2f43c82ca1/scale_1200",
      "https://www.claude-monet.com/assets/img/paintings/the-artists-garden-at-giverny.jpg",
      "https://www.vincentvangogh.org/images/paintings/irises.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      "https://ychef.files.bbci.co.uk/1280x720/p070wbmx.jpg",
      "https://lh3.googleusercontent.com/J0sw0IiqP2F4gavYnI-vUa5IBgHiHy42lohgm-qq1vuygUX0HQgylVSV1ZdDTV5XIg=s1200",
    ]
  }
];

// Show modal greeting and initialize swiper
window.addEventListener('DOMContentLoaded', function() {
  modalFirst.style.display = 'block';
  showGallery(mainGallery[0].image_gallery);
  Results.style.display = "none";

  closeButtonGreeting.addEventListener('click', function() {
    modalFirst.style.display = 'none';
    Results.style.display = "grid";
  });
});

// Show gallery using Swiper
function showGallery(images) {
  let slides = '';
  for (let i = 0; i < images.length; i++) {
    slides += `<div class="swiper-slide">
      <img src="${images[i]}" alt="">
    </div>`;
  }

  swiperContainer.innerHTML = `
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        ${slides}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  `;

  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true
  });
}

//------end of greeting part ---------



//const show = document.getElementById(`show`)
//const hide = document.getElementById(`hide`)




// declare elements 
//const AgeInput = document.getElementById("age")
//const GenerateBtn = document.getElementById("generate")
const Results = document.getElementById("result");
//const Status = document.getElementById("status-msg")

// modal elements
const modal = document.getElementById("modal");
const modalWrapper = document.getElementById("modal-wrapper");
const modalContent = document.getElementById("modal-content");
const closeButton = document.getElementById("close-button");

// toolbar elements
const searchInput = document.getElementById("search-box");
const submitSearch = document.getElementById("submit-search");
const filterSubmitBtn = document.getElementById("filter-submit");
// status box
const statusUpdate = document.getElementById("status-update");


const Arts = [
    {
        id: 0,
        title: "Vincent Van Gogh 'The Starry Night Over The Rhone'",
        category: "Van Gogh",
        image: "https://www.vincentvangogh.org/images/paintings/the-starry-night-over-the-rhone.jpg",
        
        discription: "The Facts that You Don't Know About the Masterpiece",
        content: `
        "Starry Night Over the Rhone" was part of the 1889 Society des Independents exhibition in Paris, and was one of only a few Van Gogh artworks shown publicly prior to his death.
        <br>
        Van Gogh completed the painting in September 1888 while in Arles but before entering the mental asylum at Saint-Remy where he would paint Starry Night. 
        <br>
        "Starry Night Over the Rhone" remained with private owners in the Netherlands until 1922 when the Buffa Gallery of Amsterdam acquired it. Since 1975, it has resided at the Musee d'Orsay in Paris. 
        <br>
        The places where Van Gogh set up his easel to do his plein air paintings are now part of the Van Gogh Tour in Arles.
        `,
        year: "1888",
        age_restrict: 5,
    },
    {
        id: 1,
        title: "Vincent Van Gogh 'Irises'",
        category: "Van Gogh",
        image: "https://www.vincentvangogh.org/images/paintings/irises.jpg",
        discription: "Secrets of 'Irises'",
        content: `
        "Irises" held the record for the most expensive artwork 1987 when it sold for $53.9 million USD, which would be around $100 million in the current economy. 
        <br>
        The painting was among nearly 130 artworks Van Gogh completed during his stay in a mental institution at Saint-Remy the year prior to his death. 
        <br>
       "Irises" was the first painting Van Gogh started after arriving at the asylum. The flowers were growing in a garden in the small outdoor area where the artist was allowed to stroll and sit. 
       <br>
       Each iris petal in the "Irises" painting is unique, featuring different shading, shape and size. Only one blossom, however, is a completely different color. 
       <br>
        7) The painting has been bought and sold a dozen times, the last being a 1990 purchase by the J. Paul Getty Museum in Malibu, Calif., where the artwork remains to the present day. 
        `,
        year: "1889",
        age_restrict: 5,
    },
    {
        id: 2,
        title: "Vincent Van Gogh 'Almond Blossom'",
        category: "Van Gogh",
        image: "https://iiif.micr.io/rAERt/full/1280,/0/default.jpg",
        discription: "Secrets of 'Almond Blossom'",
        content: `
        The 1890 painting "Almond Blossom" was Van Gogh's gift to his newly born nephew and namesake. 
        <br>
       Van Gogh's "Almond Blossom" was part of a recent "Van Gogh and Japan" joint exhibition of his own works and Japanese paintings. 
       <br>
       Ironically the artist completed his final painting of the blossoming tree, an image of rebirth and new life, a few short months before his death by suicide. 
        `,
        year: "1890",
        age_restrict: 5,
    },
    {
        id: 3,
        title: "Ivan Aivazovsky 'Sunset over Ischia'",
        category: "Aivazovsky",
        image: "https://avatars.dzeninfra.ru/get-zen_doc/1884623/pub_5dde823f05dde27f8d3c26a1_5ddef1c0cfa4bb2f43c82ca1/scale_1200",
        discription: "Aivazovsky’s favourite place",
        content: `
        In the present work, the artist returns to one of his favourite locations, the Gulf of Naples, with a sublime view of the island of Ischia. Aivazovsky employs a palette of dusky tones to encapsulate the softer, golden glow of fading sunlight, perfectly pairing it with a Romantic composition of the island and a departing ship in the distance. His expert workmanship deftly evokes the translucence and diaphanous fabric of the water as the gentle, warm light refracts through the depths of the sea. In contrast to a substantial number of Aivazovsky’s canvases, Sunset over Ischia does not suggest the potential for human oblivion at the hands of the elements – instead its subject exudes a sense of calm which compels us to bask in the glorious, magnificent moments of beauty offered by the natural world, hence underlining both its ability to destroy as well as to beguile and astonish.
        `,
        year: "1873",
        age_restrict: 18,
    },
    {
        id: 4,
        title: "Ivan Aivazovsky 'St. Isaac's Cathedral on a frosty day'",
        category: "Aivazovsky",
        image: "https://aif-s3.aif.ru/images/013/237/5d5a146814e94afa954d3ed9b3887d0f.jpg",
        discription: "Snowy Saint Petersburg",
        content: `
        The present painting is an extremely rare treatment of an architectural subject by the artist and is an excellent example of Aivazovskii's mature work. St. Isaac's Cathedral, named after St. Isaac of Dalmatia, the saint on whose name-day St. Petersburg was founded, was built over a period of forty years (1818-1858) under the supervision of the architect Auguste de Montferrand. Colossal granite columns were ripped from the earth with sledgehammers and chiselled by over 7,000 men in order to construct this symbol of man's subjugation of nature. The towering dome of Aivazovskii's canvas, gilded with over 100 kg of gold, provides an artificial light source whose rays are diffused by the palpably frosty atmosphere. This work was exhibited in St. Petersburg in 1891 at the St. Peterburg Academy of Arts.
        `,
        year: "1891",
        age_restrict: 18,
    },
    {
        id: 5,
        title: "Ivan Aivazovsky 'View of Venice. San Giorgio Maggiore'",
        category: "Aivazovsky",
        image: "https://macdougallauction.com/image/asset/large/5f31f586e42f8.jpg",
        discription: "Ivan Aivazovsky's Venice",
        content: `
        View of Venice. San Giorgio Maggiore is one such variation, reworking a composition Ivan Aivazovsky had first hit upon in the 1840s. Its captivating calmness and technical perfection date back to the cycle of Venetian works he had painted during his time in Italy. However, despite the shared motifs and structural solutions of all the artist’s views of the Venice lagoon, Aivazovsky’s exceptional skill for improvisation allowed him to create an emotional resonance that is absolutely distinctive in this 1851 work by the development a “pink” colour range, characteristic of this new phase of his career.
        `,
        year: "1851",
        age_restrict: 18,
    },

    {
        id: 6,
        title: "Claude Monet 'The Artist's Garden at Giverny'",
        category: "Monet",
        image: "https://www.claude-monet.com/assets/img/paintings/the-artists-garden-at-giverny.jpg",
        discription: "Claude Monet's Garden at Giverny",
        content: `
        Throughout his life, Monet had been an avid and knowledgeable gardener. It was at Giverny, however, his last home and the place he lived at for the longest, that his vision for a garden became a reality.
         His garden was a constant source of inspiration to him, particularly in later life, and included one especially important flowerbed planted in memory of his beloved aunt. The flowerbed was below the artist's bedroom window and was an exact copy of one that his aunt had had, and he had painted, at her home in Sainte-Adresse.
        `,
        year: "1900",
        age_restrict: 1,
    },

    {
        id: 7,
        title: "Claude Monet 'Water Lilies'",
        category: "Monet",
        image: "https://www.monetpaintings.org/Water%20Lilies%20Claude%20Monet.jpg?ezimgfmt=rs:400x416/rscb2/ng:webp/ngcb2",
        discription: "The Water Lilies from Claude Monet's Garden",
        content: `
        Perhaps there is no work of art more distinctive or enchanting than the Water Lilies series, or Les Nymphéas. Recognisable at a glance, Monet's Water Lilies capture the complex beauty, fragility, and radiance found in nature. At his home in the French village of Giverny, Claude Monet took his easel outside to the lush ponds surrounding his cosy little house and set to capturing the plant life of his property on the canvas. The result was Water Lilies, a series of approximately 250 individual paintings which were created during the last 30 years of Monet's life.
        `,
        year: "1919",
        age_restrict: 1,
    },

    {
        id: 8,
        title: "Claude Monet 'Garden Path at Giverny'",
        category: "Monet",
        image: "https://www.claude-monet.com/assets/img/paintings/garden-path-at-giverny.jpg",
        discription: "The path that is leading up to Monet's house",
        content: `
        Of all the subjects Monet painted, the multitude of locales his garden at Giverny provided are the most famous. The garden's path leading up to Monet's house received less attention than the Japanese bridge or the water lilies, however, and for good reason: Monet didn't paint it nearly as much.
        Monet's largest flurry of paintings of the path resulted from inconvenience. At one point, Monet commissioned some heavy-duty landscape work to enlarge the lily pond. This included redirecting a minor branch of a nearby river and was a massive undertaking, requiring months of work. 
        `,
        year: "1902",
        age_restrict: 1,
    },
    {
      id: 9,
      title: "Leonardo da Vinci 'Mona Lisa'",
      category: "da Vinci",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/540px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      discription: "A thief made her famous",
      content: `
      The world’s most famous painting 'Mona Lisa' was painted sometime between 1503 and 1519, when Leonardo was living in Florence, and it now hangs in the Louvre Museum, Paris.
      <br>
      Although in the art world, the painting had always been an acknowledged masterpiece, it wasn't until it was stolen in the summer of 1911 that it would capture the attention of the general public. Newspapers spread the story of the crime worldwide. When the painting finally returned to the Louvre two years later, practically the whole world was cheering. 
      `,
      year: "1519",
      age_restrict: 1,
  },

  {
    id: 10,
    title: "Leonardo da Vinci 'Last Supper'",
    category: "da Vinci",
    image: "https://www.italian-renaissance-art.com/images/LeonardoLastSupper.jpg",
    discription: "The secret of 'The Last Supper'",
    content: `
    The Last Supper is a very popular religious scene painted by many celebrated artists. 
    <br>
    Unlike artists before and after him, Leonardo da Vinci chose not to put halos on Jusus Christ. 
    <br>
    Many art historians believe that Leonardo da Vinci believe in nature, not in God. To Leonardo, nature is God, so he treated every character in the fresco as common people.
    
    `,
    year: "1498",
    age_restrict: 1,
},
{
  id: 11,
  title: "Leonardo da Vinci 'Salvator Mundi'",
  category: "da Vinci",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Leonardo_da_Vinci%2C_Salvator_Mundi%2C_c.1500%2C_oil_on_walnut%2C_45.4_×_65.6_cm.jpg",
  discription: "The Facts about 'Salvator Mundi'",
  content: `
  On the 15th of November 2017, Leonardo Da Vinci’s painting, ‘Salvator Mundi’, smashed artwork auction records when it was sold at a Christie’s auction for US$450.3 million. The buyer was a Saudi prince with an unknown history of art collecting, Bader Abdullah Farhan Al-Saud, an associate of Crown Prince Mohammed Salman. The Saudi embassy in Washington went on to clarify that the prince was acting as a middleman for Abu Dhabi’s Department of Culture and Tourism. The painting was purchased to be one of the key attractions of the newly opened Louvre in Abu Dhabi.
  
  `,
  year: "1500",
  age_restrict: 1,
},
{
  id: 12,
  title: "Pierre-Auguste Renoir 'Luncheon of the Boating Party'",
  category: "Renoir",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
  discription: "About Renoir's Masterpiece",
  content: `
  Luncheon of the Boating Party is also known as Le déjeuner des canotiers and it was produced at the height of Renoir´s Impressionist career, in 1881. Luncheon of the Boating Party is one of Renoir´s final works depicting a sociable scene from his early life.
  <br>
  Luncheon of the Boating Party shows a group of Renoir´s friends relaxing and enjoying food, drinks and good conversation on a balcony at the Maison Fournaise in Chatou, France. Renoir often included close friends is his paintings and in this canvas he also includes his future wife, Aline Charigot, who can be seen in the left foreground playing with a small dog.
  
   `,
  year: "1881",
  age_restrict: 1,
},

{
  id: 13,
  title: "Pierre-Auguste Renoir 'Bal du moulin de la Galette'",
  category: "Renoir",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Musée_d%27Orsay_RF_2739_%28derivative_work_-_AutoContrast_edit_in_LCH_space%29.jpg",
  discription: "Parisian life",
  content: `
  This painting is doubtless Renoir's most important work of the mid 1870's and was shown at the Impressionist exhibition in 1877. Though some of his friends appear in the picture, Renoir's main aim was to convey the vivacious and joyful atmosphere of this popular dance garden on the Butte Montmartre. The study of the moving crowd, bathed in natural and artificial light, is handled using vibrant, brightly coloured brushstrokes.
  <br>
  This portrayal of popular Parisian life, with its innovative style and imposing format, a sign of Renoir's artistic ambition, is one of the masterpieces of early Impressionism.
  
  `,
  year: "1919",
  age_restrict: 1,
},

{
  id: 14,
  title: "Pierre-Auguste Renoir 'La Grenouillère'",
  category: "Renoir",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Auguste_Renoir_-_La_Grenouillère_-_Google_Art_Project.jpg",
  discription: "The summer of 1869",
  content: `
  It is the summer of 1869 and the painter Auguste Renoir and his colleague and friend Claude Monet are spending some days together. They paint the same subject. 
  La Grenouillère, the frog pond was a popular venue for outings from Paris and for bathing in the summer, situated outside Bougival to the west of the capital. The sun is filtered through the green leaves and it sparkles on the surface of the river Seine. People are bathing. Some are in boats, rowing or sailing on the river. 
  
  `,
  year: "1869",
  age_restrict: 1,
},
];

function DisplayArts() {
  Results.innerHTML = "";
  for (let i = 0; i < Arts.length; i++) {

    Results.innerHTML += ` 
    <div class="art" data-aos="fade-up" 
    data-aos-delay="${(i+1)*50}"> 
        <img data-id="${Arts[i].id}" class="posters" src="${Arts[i].image}" alt="${Arts[i].alt}">
        <div>
        <h2>${Arts[i].title}</h2>
            <button data-id="${Arts[i].id}" class="showmore-button">Show More</button>
        </div>
    </div>
   
    `
}
}
// modal
function openModal(image,discription, content) {
  modalContent.innerHTML = `
  <img src="${image}">
  <h4>${discription}</h4>
  <p>${content}</p>
  `;
  modalWrapper.classList.add("active");
}

// Function to close the modal
function closeModal() {
  modalWrapper.classList.remove("active");
}

// Add click event listeners to the "showmore" buttons
function addButtonEvents() {
  const showButtons = document.getElementsByClassName("showmore-button");

  for (let i = 0; i < showButtons.length; i++) {
    showButtons[i].addEventListener("click", function () {
      let currentArtId = showButtons[i].dataset.id;
      let image = Arts[currentArtId].image;
      let discription = Arts[currentArtId].discription;
      let content = Arts[currentArtId].content;
      openModal(image, discription, content);
    });
  }
}

// Add click event listener to the close button
closeButton.addEventListener("click", closeModal);

// end of the modal 


// ---search functionality---

function searchArts(e) {
  // prevent the default behaviour of the form
  e.preventDefault();
  // put the search value into a variable
  let searchString = searchInput.value;
  // check if the search string is empty
  if (searchString === "") {
      statusUpdate.innerHTML = "Please enter a search term";
      statusUpdate.classList.toggle("active");
      return;
  }
  // start filtering results
  findMatch(searchString);
}

function RenderArts(art) {
    // we will show the article on the screen
    Results.innerHTML += `
    <div class="art">
    <img data-id="${art.id}" class="posters" src="${art.image}" alt="${art.alt}">
    <div>
    <h2>${art.title}</h2>
        <button data-id="${art.id}" class="showmore-button">Show More</button>
    </div>
</div>
    `
    ;
}


function findMatch(string) {
  // clear all results, later we'll fill them in
  Results.innerHTML = "";
  // declare a variable which determines if there's a match
  let match = false;
  let matchedArts = 0;
  // convert our search string to lower case
  let stringLowercase = string.toLowerCase();
  // console.log(stringLowercase);
  // loop through all the articles, to match the search string to the description/title
  for (let i = 0; i < Arts.length; i++) {
      if (Arts[i].title.toLowerCase().match(stringLowercase) || Arts[i].content.toLowerCase().match(stringLowercase) || Arts[i].category.toLowerCase().match(stringLowercase)) {
          // console.log("We found a match!");
          // console.log(articles[i]);
          match = true;
          matchedArts++;
          // change the status to show the number of results, and search term
          statusUpdate.innerHTML = `Showing ${matchedArts} results for the search "${string}".`
          statusUpdate.classList.add("active");
          // ran a function which will show the article on the screen
          // pass in the article which matches to the search, as an argument
          RenderArts(Arts[i]);
      }
  }
  addButtonEvents();
  // the loop has finished
  // !match is the same as match === false
  if (!match) {
      // console.log("No match found!");
      statusUpdate.innerHTML = `No match found for the term "${string}".`;
      statusUpdate.classList.add("active");
  }
}

submitSearch.addEventListener("click", function () {
  // run our search articles function, use the JS event variable as an argument
  // this event variable is automatically used by javascript to give information about what the user is doing
  searchArts(event);
})

// -------------------filter by category---------------------------

function filterBySelectedCategory(categories) {
  // at this point we know for certain the user has selected a category

  // so we can show our status, to reflect the selected categories
  statusUpdate.innerHTML = `The most famous paintings by ${categories}`
  statusUpdate.classList.add("active");

  // so we clear our articles
  Results.innerHTML = "";
  // loop through each selected category, and compare each one with our arts =
  for (let i = 0; i < categories.length; i++) {
      // check if our selected category is equal to Van Gogh
      if (categories[i] === "Van Gogh") {
          // loop through our articles
          for (let index = 0; index < Arts.length; index++) {
              // check if the article category is gaming
              if (Arts[index].category === "Van Gogh") {
                  // console.log(articles[index]);
                  RenderArts(Arts[index]);
              }
          }
      }
      // check if our selected category is equal to Monet
      if (categories[i] === "Monet") {
          // loop through our articles
          for (let index = 0; index < Arts.length; index++) {
              if (Arts[index].category === "Monet") {
                RenderArts(Arts[index]);
              }
          }
      }
      // check if our selected category is equal to Aivazovsky
      if (categories[i] === "Aivazovsky") {
          // loop through our articles
          for (let index = 0; index < Arts.length; index++) {
              if (Arts[index].category === "Aivazovsky") {
                RenderArts(Arts[index]);
              }
          }
      }
// check if our selected category is equal to da Vinci
if (categories[i] === "da Vinci") {
  // loop through our articles
  for (let index = 0; index < Arts.length; index++) {
      if (Arts[index].category === "da Vinci") {
        RenderArts(Arts[index]);
      }
  }
}
// check if our selected category is equal to Renoir
if (categories[i] === "Renoir") {
  // loop through our articles
  for (let index = 0; index < Arts.length; index++) {
      if (Arts[index].category === "Renoir") {
        RenderArts(Arts[index]);
      }
  }
}
} //end of our category loop
  // by this stage, we have checked across all our selected categories, and matched them to our articles, and shown new articles on the screen that match those categories

  // collect all the buttons and attach their listeners
  addButtonEvents();
}

function filterArts(e) {
  e.preventDefault();
  // gather every checkbox that has been checked
  let checkedCategories =
      document.querySelectorAll("input[type=checkbox]:checked");

  // console.log(`here's our checked categeries`);
  // console.log(checkedCategories);

  // check if nothing has been selected
  if (checkedCategories.length === 0) {
      // console.log("You didn't select anything");

      // so we can show our status, to reflect the selected categories
      statusUpdate.innerHTML = `Showing all artworks.`
      statusUpdate.classList.add("active");
      // display a full list of articles
      DisplayArts();
      // collect all the buttons and attach their listeners
      addButtonEvents();
      return;
  }

  // declare an array, this array will be filled with categories which the user has selected
  let selectedCategories = [];

  for (let i = 0; i < checkedCategories.length; i++) {
      // we're looping over all the checked catagories, and putting their values into another array called selectedCategories
      selectedCategories.push(checkedCategories[i].value);
  }
  // console.log(selectedCategories);
  filterBySelectedCategory(selectedCategories);
}

// user has clicked the filter by category button
filterSubmitBtn.addEventListener("click", function () {
  // event will help us avoid the refresh
  filterArts(event);
})

// start our app by displaying all the articles
DisplayArts();
// collect all the buttons and attach their listeners
addButtonEvents();






