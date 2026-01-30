const products = {
  kids: [
  { id: 1, name: "Kids School Skirt", price: 499, gender: "girls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbvVrWhAhGQElCHEDsMp4mDEUmLj4m507ZQ&s" },
  { id: 2, name: "Kids School Shorts", price: 399, gender: "boys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Fhgoqt4n1eCbO5yew8BE4jsdwkZSyEQb-g&s" },
  { id: 3, name: "Kids School Trousers", price: 549, gender: "boys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAE3Sw4nkh9_7_rZcVtjp4i6oxKXQDZka7w&s" },
  { id: 4, name: "Kids School Blazer", price: 1299, gender: "all", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZUS-ustxUC_0MI7uaNOGfSGlozM_y85D2bA&s" },
  { id: 5, name: "Kids School Sweater", price: 799, gender: "all", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToXzgwjnX66Lqr7rYD4uEOKFy3D9IkivxrvQ&s" },
  { id: 6, name: "Kids School shirt", price: 199, gender: "all", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHPT0D3JXOLVlSwkK0z5F8hyhcrC2FAEALQ&s" },
],

  highschool: [
  { id: 101, name: "High School Shirt", price: 699, gender: "boys", image: "https://media.istockphoto.com/id/1280274935/photo/handsome-indian-young-boy-wearing-white-shirt-and-red-tie.webp?a=1&b=1&s=612x612&w=0&k=20&c=WPsa_k4POZ1MjTyMbUNffHVt-3mo9QCTxamjpmTaezg=" },
  { id: 102, name: "High School Trousers", price: 899, gender: "boys", image: "https://plus.unsplash.com/premium_photo-1724220736652-8514fef4f067?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlnaCUyMHNjaG9vbCUyMHRyb3VzZXJzfGVufDB8fDB8fHww" },
  { id: 103, name: "High School Skirt", price: 849, gender: "girls", image: "https://media.istockphoto.com/id/2198649599/photo/high-school-student.webp?a=1&b=1&s=612x612&w=0&k=20&c=3KYponUshBUqmSj2B8MUC9_N7RNRByfirCv2Ou29Qyg=" },
  { id: 104, name: "High School Blazer", price: 1799, gender: "all", image: "https://media.istockphoto.com/id/2198649599/photo/high-school-student.webp?a=1&b=1&s=612x612&w=0&k=20&c=3KYponUshBUqmSj2B8MUC9_N7RNRByfirCv2Ou29Qyg=" },
  { id: 105, name: "High School Sweater", price: 249, gender: "all", image: "https://images.unsplash.com/photo-1578795024466-26f49b4d23f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlnaCUyMHNjaG9vbCUyMHN3ZWF0ZXJ8ZW58MHx8MHx8fDA%3D" },
],

corporate: [
  {
    id: 201,
    name: "Corporate Formal Shirt",
    price: 1199,
    gender:"all",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvcnBvcmF0ZSUyMGZvcm1hbCUyMHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 202,
    name: "Corporate Formal Trousers",
    price: 1499,
    gender:"all",
    image: "https://images.unsplash.com/photo-1741915313755-208c59c21165?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ycG9yYXRlJTIwZm9ybWFsJTIwdHJvdXNlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 203,
    name: "Corporate Blazer",
    price: 3499,
    gender:"all",
    image: "https://images.unsplash.com/photo-1615349719958-8e6381dd2f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvcnBvcmF0ZSUyMGJsYXplcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 204,
    name: "Corporate Waistcoat",
    price: 1999,
    gender:"all",
    image: "https://images.unsplash.com/photo-1624468468838-506a1ca6efd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvcnBvcmF0ZSUyMHdhaXN0Y29hdHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 205,
    name: "Corporate Tie",
    price: 399,
    gender:"all",
    image: "https://media.istockphoto.com/id/1146412896/photo/blue-silk-tie-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=jzlWaKo3Elo0_6fNVyHAF4AnlEx8VbLLtuT-VVyk-LE=",
  },
],


  accessories: [
  {
    id: 301,
    name: "School Belt",
    price: 299,
    ggender:"all",
    image: "https://images.unsplash.com/photo-1568749750364-053fd74b4115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Nob29sJTIwdW5pZm9ybSUyMGJlbHR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 302,
    name: "School Tie",
    price: 249,
    gender:"all",
    image: "https://images.unsplash.com/photo-1591729652476-e7f587578d9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGllfGVufDB8fDB8fHww",
  },
  {
    id: 303,
    name: "School Socks (Pair)",
    price: 199,
    gender:"all",

    image: "https://images.unsplash.com/photo-1764776060763-d8c1c50f3e72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaG9vbCUyMHNvY2tzfGVufDB8fDB8fHww",
  },
  {
    id: 304,
    name: "Black School Shoes",
    price: 1799,
    gender:"all",

    image: "https://media.istockphoto.com/id/1150393183/photo/new-leather-student-shoes-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=6sIG_3iB3_Nx-QyfMiGhMOCsFXmFZqmErJWN5otnrNE=",
  },
  {
    id: 305,
    name: "ID Card & Lanyard",
    price: 149,
    gender:"all",

    image: "https://media.istockphoto.com/id/185108839/photo/identity-pass.webp?a=1&b=1&s=612x612&w=0&k=20&c=PAR-tRYFbvSZcul5Tyx4K0_MMTMaeVcTJ3rSmL8sb6U=",
  },
],
};


export default products;
