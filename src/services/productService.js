import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs, // getDoc yerine getDocs kullanılmalı
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import toast from 'react-hot-toast';

export const addProduct = async (productData) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...productData,
    });

    toast.success('Ürün başarıyla eklendi.');
    return { id: docRef.id, ...productData };
  } catch (error) {
    toast.error('Ürün eklenirken hata oluştu!');
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const q = query(collection(db, 'products'), orderBy('createAt', 'desc'));
    const querySnapshot = await getDocs(q); // getDoc yerine getDocs kullanılmalı
    return querySnapshot.docs.map((doc) => ({ // docs() değil docs kullanılmalı
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    toast.error('Ürün yüklenirken bir hata oluştu!');
    console.log(error);
    return []; // Hata durumunda boş array dön
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, {
      ...productData,
      updateAt: new Date(),
    });
    toast.success('Ürün başarıyla güncellendi.');
  } catch (error) {
    toast.error('Ürün güncellenirken hata oluştu!');
    console.log(error);
  }
};

export const deleteProduct = async (productId) => {
  try {
    await deleteDoc(doc(db, 'products', productId));
    toast.success('Ürün başarıyla silindi.');
  } catch (error) {
    toast.error('Ürün silinirken hata oluştu!');
    console.log(error);
  }
};
