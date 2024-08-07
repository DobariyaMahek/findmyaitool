
import styles from "./browseAllGPTsBanner.module.scss";
import Link from "next/link";
import SearchIcon from "@/assets/icons/SearchIcon";
const IconImg = "/assets/images/banner-option-img-w.webp";

export default function BrowseAllGPTsBanner({ search, handleOnSearch }) {
  return (
      <div className={styles.browseAllGPTsBannerSection}>
        <div className="container">
          <div className={styles.browseAllGPTsBannerAlignment}>
            <div className={styles.browseAllOption}>
              <img loading="lazy" src={IconImg} alt="IconImg" />
            </div>
            <div className={styles.browseAllGPTsBannerDetails}>
              <h1>Browse All GPTs</h1>
              <p>
                Discover and create custom versions of ChatGPT that combine
                instructions, extra knowledge, and any combination of skills.
              </p>
              <div className={styles.browseAllGPTsSearch}>
                <input
                  type="text"
                  placeholder="Search Public GPTs Here...."
                  onChange={handleOnSearch}
                  value={search}
                />
                <div className={styles.searchIcon}>
                  <SearchIcon />
                </div>
                <Link prefetch={false}     href="/gpt-category">
                  <div className={styles.browseAllGPTsviewAllAlignment}>
                    <span>View All Categories</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_280_422)">
                        <path d="M3.9885 11.8081L9.33345 6.4631C9.45696 6.33958 9.52477 6.1749 9.52477 5.99549C9.52477 5.81968 9.45696 5.6549 9.33345 5.53159L3.99357 0.191511C3.86996 0.0679995 3.70518 -2.54382e-07 3.52938 -2.62067e-07C3.35357 -2.69751e-07 3.1887 0.0679019 3.06518 0.191511L2.67192 0.584778C2.54841 0.70829 2.48021 0.873167 2.48021 1.04897C2.48021 1.22478 2.54841 1.38956 2.67192 1.51316L7.15609 5.99734L2.66675 10.4865C2.54333 10.61 2.47524 10.7748 2.47524 10.9507C2.47524 11.1265 2.54333 11.2912 2.66675 11.4148L3.06021 11.8081C3.31611 12.064 3.7326 12.064 3.9885 11.8081Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_280_422">
                          <rect width="12" height="12" fill="white" transform="translate(12) rotate(90)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
