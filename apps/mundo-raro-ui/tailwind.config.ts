import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image-one":
          "url('https://s3-alpha-sig.figma.com/img/c971/b71b/9643e20388885bfa5eac64c208ee3667?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZjlmPXHE1fnjm4QGtozkw2YsmuzMvoXd7P0Qntf7XhBn0RdA2MvlUSm4klQ534eHLphkMVV6sBbF1sW7wl5qAPdUA3Jcuh92K6e5QQik~CR6XaCoj1JroZGVIKSSORyZheHRIvJIvGpx~jnLXVPXk~NxKh5qFmKZZnJRPjf9f~kkg5-wOFw3A66krTDPP9GXkSyInqMVpD8cbuLpwBzm6j5c-rS3XYbtHnZ3yGO6Z9-cqE4QIHjG8ndV0YLOcfOvEGf1129nCpnPJWJGND9ecuyAnrASd0dl27c7CEa8R6buC5wvmhv4BqrHuI8QEq0YYOdsnTIumn5xh98VTLjhxg__')",
        "img-two":
          "url('https://s3-alpha-sig.figma.com/img/4726/2d4c/635b907462fb5f5dee5a600a72e44394?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ii6K4360MepXr0xdJpaBtEDQOSxR6qg3yjZjfNnlpgXQa3ZTLpqKe4dOJm-lbav4PXDzoYprDmfRSox83WTKRZ0T6XLt8WgjXXXyUCbdQ27hVFTkO~G-54R1bWlQV3TBlj8PLOFEi4cPhMyp9i8fKt3lIbLTD~QAQ8RNVUi6YPt-4BKMWVDBehHK3JnDOWgutzNyBs4YYR4lU~95tUixfxcwzoA6C~zyHuZVo27Gdl97Bb7lj~ULjSLtEn0BO0yaIHNbRUi1zx094fG4F3JN56aZ-z-0-HnRf4O~Zh50SXCvqu3zR7Drn8mKSfMy1YTNplWKfm52r1xa~ahMuqxjYQ__')",
        "img-three":
          "url('https://s3-alpha-sig.figma.com/img/2ca1/4ac3/4e0bedd1365e9047007eea98ae70dca0?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KAtFzp4RSNHrYO~eE9dbNjiCbArQBo1jv5Ij87zbBCX4eGUWFQEfW~QwgTJQhlKCpkAdEWsVfeLyOEsuY~1vLdPo0vgBNwIBKNoO2Yw3nGduaFKgb-JrVzFBHRXsuFl4uWwMn~k8IH0QWEOriXKzkxGYtgNTI9SRiGPY1jQQ4RGpJz0AM-8oOHTuXn8yWssKmsYF~kNLj2KvvyK0ObZKpxpMIfjbu27CFSAZ5peossNSua7AAXfFes8fRv77XAHK1CEPKOTPk5lIapXksVgSUUJuHbErEjjrND1Lqqz8OVEAV4oGyeXjhgkjGIpIdYsrVV6T8A-nI8zQ5~mC6D2B8w__')",
        "black-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 55%, #000000 98.73%)",
      },
    },
  },
  plugins: [],
};
export default config;
