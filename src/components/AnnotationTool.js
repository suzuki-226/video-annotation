"use client";
import { useState } from "react";

export default function AnnotationTool({ annotations, setAnnotations }) {
    const [newAnnotation, setNewAnnotation] = useState("");

    const addAnnotation = () => {
        setAnnotations([...annotations, newAnnotation]);
        setNewAnnotation("");
    };

    return (
        <div>
            <h2>アノテーションツール</h2>
            <input
                type="text"
                value={newAnnotation}
                onChange={(e) => setNewAnnotation(e.target.value)}
                placeholder="アノテーションを追加"
            />
            <button onClick={addAnnotation}>追加</button>
            <ul>
                {annotations.map((annotation, index) => (
                    <li key={index}>{annotation}</li>
                ))}
            </ul>
        </div>
    );
}
