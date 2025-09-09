
import { collection, getDocs ,addDoc} from "firebase/firestore";
import { db } from "../../repositories/firebase/config";
import { useEffect ,useState} from "react";

export const Products = () => {
    //Utilizar este estado para mapear los productos
    const [products, setProducts] = useState([]);

    //Obtener los productos de Firestore
    const getProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});


        const productsData = [];
        querySnapshot.forEach((doc) => {
            productsData.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsData);
    }

    //Utilizar la funcion en un formulario
    const addProduct = async (product) => {
        const docRef = await addDoc(collection(db, "products"), {
            name: product.name,
            price: product.price,
            stock: product.stock
        });
        console.log("Document written with ID: ", docRef.id);
    }

    useEffect(()=>{
        getProducts();
    }, [])

  return (
    <div>Products</div>
  )
}
