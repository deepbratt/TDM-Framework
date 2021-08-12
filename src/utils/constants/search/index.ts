export const Heading = "Filter Search"
export const subHeading="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. "
export const SortLabel="Sort By"
export const BrandLabel = "Brand/Model"
export const ModelHeading = "Model Year"
export const BodyLabel = "Body Type"
export const RunHeading = "Kilometers Run"
export const FromText="From"
export const ToText = "To"
export const ButtonText = "Apply Filters"
export const KilometerText="Kilometer"


export const BrandList = [
    { id: 1, label: "All", value: "All" },
    { id: 2, label: "BMW", value: "BMW" },
    { id: 3, label: "Toyota", value: "Toyota" },
    { id: 4, label: "Honda", value: "Honda" },
];
export const Year = [
    { id: 1, label: "1995", value: "1995" },
    { id: 2, label: "1996", value: "1996" },
    { id: 3, label: "1997", value: "1997" },
    { id: 4, label: "1998", value: "1998" },
];

export const BodyType = [
    { id: 1, label: "All", value: "All" },
    { id: 2, label: "March", value: "March" },
    { id: 3, label: "April", value: "April" },
    { id: 4, label: "May", value: "May" },
];


 const dateCreator=() => {
     let currentDate = new Date();
     let CurrentYear = currentDate.getFullYear()
     let arr = []
     for (let i = 1960; i <= CurrentYear; i++){
         arr.push({ id: i.toString(), label: i.toString(), value: i.toString() })
     }
     return arr
}
export const dates=dateCreator()