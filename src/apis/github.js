import axios from "axios";

const personalAccessToken = "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";

const instance = axios.create({
  baseURL: "https://api.github.com",
  // Setiap kali kita menembak ke github,
  // Maka headers ini akan selalu diberikan
  headers: {
    // Pada dokumentasi Github,
    // untuk melakukan Authentication harus memberikan headers Authorization
    // dalam bentuk bearer token dan tokennya adalah personal access token
    Authorization: `Bearer ${personalAccessToken}`,
    // Pada dokumentasi Github juga direkomendasikan
    // untuk memberikan header tambahan ini
    // dalam setiap request / tembakan yang ada
    Accept: "application/vnd.github+json",
  },
});

export default instance;