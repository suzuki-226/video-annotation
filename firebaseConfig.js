// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔹 ここにFirebaseの設定を追加
const firebaseConfig = {
    apiKey: "AIzaSyAzLGXDj1RaqvQ3eGplX90Gh2W26koXCz4",
    authDomain: "sample-1-c91d6.firebaseapp.com",
    projectId: "sample-1-c91d6",
    storageBucket: "sample-1-c91d6.firebasestorage.app",
    messagingSenderId: "613975455386",
    appId: "1:613975455386:web:c750052b8deec0afa6d123"
};

// Firebaseアプリを初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

import { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // Firebaseの設定をインポート
import { collection, addDoc, getDocs } from "firebase/firestore";

const AnnotationTool = () => {
    const [annotations, setAnnotations] = useState([]);
    const [text, setText] = useState("");

    // 🔹 Firestore からデータを取得
    useEffect(() => {
        const fetchAnnotations = async () => {
            const querySnapshot = await getDocs(collection(db, "annotations"));
            const fetchedAnnotations = querySnapshot.docs.map(doc => doc.data().text);
            setAnnotations(fetchedAnnotations);
        };

        fetchAnnotations();
    }, []);

    // 🔹 Firestore にデータを追加
    const handleAddAnnotation = async () => {
        if (text.trim() !== "") {
            const newAnnotation = text;
            setAnnotations([...annotations, newAnnotation]);
            setText("");

            // Firestore に保存
            await addDoc(collection(db, "annotations"), { text: newAnnotation });
        }
    };

    return (
        <div>
            <h2>アノテーションツール</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="コメントを入力"
            />
            <button onClick={handleAddAnnotation}>追加</button>
            <ul>
                {annotations.map((annotation, index) => (
                    <li key={index}>{annotation}</li>
                ))}
            </ul>
        </div>
    );
};

export default AnnotationTool;
