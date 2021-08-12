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
    { id: 1, label: "Toyota", value: "Toyota" },
    { id: 2, label: "Suzuki", value: "Suzuki" },
    { id: 3, label: "Honda", value: "Honda" },
    { id: 4, label: "Mitsubishi", value: "Mitsubishi" },
    { id: 5, label: "MG", value: "MG" },
    { id: 6, label: "Hyundai", value: "Hyundai" },
    { id: 7, label: "Mercedes Benz", value: "Mercedes Benz" },
    { id: 8, label: "Changan", value: "Changan" },
    { id: 9, label: "FAW", value: "FAW" },
    { id: 10, label: "Mazda", value: "Mazda" },
    { id: 11, label: "BMW", value: "BMW" },
    { id: 12, label: "Prince", value: "Prince" },
    { id: 13, label: "Chevrolet", value: "Chevrolet" },
    { id: 14, label: "Lexus", value: "Lexus" },
    { id: 15, label: "DFSK", value: "DFSK" },
    { id: 16, label: "Subaru", value: "Subaru" },
    { id: 17, label: "Jeep", value: "Jeep" },
    { id: 18, label: "United", value: "United" },
    { id: 19, label: "Daewoo", value: "Daewoo" },]
export const Location = [
    { id: 2, label: "Lahore", value: "Lahore" },
    { id: 3, label: "Islamabad", value: "Islamabad" },
    { id: 4, label: "Karachi", value: "Karachi" },
    { id: 5, label: "Rawalpindi", value: "Rawalpindi" },
    { id: 6, label: "Peshawar", value: "Peshawar" },
    { id: 7, label: "Multan", value: "Multan" },
    { id: 8, label: "Sialkot", value: "Sialkot" },
    { id: 9, label: "Sargodha", value: "Sargodha" },
    { id: 10, label: "Mardan", value: "Mardan" },
    { id: 11, label: "Hyderabad", value: "Hyderabad" },
    { id: 12, label: "Gujrat", value: "Gujrat" },
    { id: 13, label: "Abbottabad", value: "Abbottabad" },
    { id: 14, label: "Bahawalpur", value: "Bahawalpur" },
    { id: 15, label: "Faisalabad", value: "Faisalabad" },
    { id: 16, label: "Quetta", value: "Quetta" },
    { id: 17, label: "Wah cantt", value: "Wah cantt" },
    { id: 18, label: "Rahim Yar Khan", value: "Rahim Yar Khan" },
    { id: 19, label: "Sahiwal", value: "Sahiwal" },
];

export const BodyType = [
    { id: 1, label: "Satation Wagon", value: "Satation Wagon" },
    { id: 2, label: "Convertible", value: "Convertible" },
    { id: 3, label: "Coupe", value: "Coupe" },
    { id: 4, label: "Micro Van", value: "Micro Van" },
    { id: 5, label: "Crossover", value: "Crossover" },
    { id: 6, label: "Truck", value: "Truck" },
    { id: 7, label: "Mini Van", value: "Mini Van" },
    { id: 8, label: "Compact sedan", value: "Compact sedan" },
    { id: 9, label: "Off-Road Vehicles", value: "Off-Road Vehicles" },
    { id: 10, label: "Pick Up", value: "Pick Up" },
    { id: 11, label: "Single Cabin", value: "Single Cabin" },
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