import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    )
      .then((response) => response.json())
      .then((data) => setCharacter(data.data.results[0]))
      .catch((error) => console.error(error));
  }, [id]);

  if (!character) return <div>로딩중..</div>;

  const imageUrl = character.thumbnail
    ? `${character.thumbnail.path}.${character.thumbnail.extension}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  const description =
    character.description || "해당 캐릭터에 대한 설명이 없습니다";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>{character.name}</h2>
      <img
        src={imageUrl}
        alt={character.name}
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p>
        <strong>Description:</strong> {description}
      </p>

      <div>
        <Link to="/">
          <button
            style={{
              backgroundColor: "#8B4513",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer" /* 커서 모양 바뀜 (올리면) */,
              fontSize: "1rem",
            }}
          >
            메인페이지로 가기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
