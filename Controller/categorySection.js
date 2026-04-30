const categoryBox = document.getElementById("categoryBox");

const categories = [
  {
    id: 1,
    icon: "cake.svg",
    title: "Cakes & Patries",
    subCategories: [],
  },
  {
    id: 2,
    icon: "",
    title: "Electronics",
    subCategories: [],
  },
  {
    id: 3,
    icon: "",
    title: "Groceries",
    subCategories: [],
  },
  {
    id: 4,
    icon: "",
    title: "Phones",
    subCategories: [],
  },
  {
    id: 5,
    icon: "",
    title: "Laptops",
    subCategories: [],
  },
  {
    id: 6,
    icon: "",
    title: "Wine & Spirits",
    subCategories: [],
  },
  {
    id: 7,
    icon: "",
    title: "Home Furnishing",
    subCategories: [],
  },
  {
    id: 8,
    icon: "",
    title: "Stationery",
    subCategories: [],
  },
  {
    id: 9,
    icon: "",
    title: "Toys & Games",
    subCategories: [],
  },
  {
    id: 10,
    icon: "",
    title: "Lifestyle",
    subCategories: [],
  },
  {
    id: 11,
    icon: "",
    title: "Butchery",
    subCategories: [],
  },
  {
    id: 12,
    icon: "",
    title: "Fresh Fruits & Vegetables",
    subCategories: [],
  },
];

const buildCategoryContent = () => {
  categories.map((item, index) => {
    return buildEachCategory(item.title, item.icon);
  });
};

const buildEachCategory = (label, icon) => {
  const eachCategory = document.createElement("div");
  eachCategory.className = "each-category";
  eachCategory.innerHTML = ` 
      <div style="display:flex; flex-direction:row; gap:15px; align-items:center; font-size:14px; color:#090B0E;"> 
        <img
          src="./Assets/Icons/${icon}"
          alt="cake-icon"          
          width="24px"
        />
        <p>${label}</p>
      </div>
      
      <img 
        src="./Assets/Icons/ChevronRight.svg"
        alt="chevron-right"
        width="20px"
      />
      `;
    
  categoryBox.appendChild(eachCategory);
};

buildCategoryContent();
