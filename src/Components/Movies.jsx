import React from "react";

function Movies() {
  const movieImg = [
    "https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABchPG15dc4HfMgdO7Ok_yHF00h-mpq8FWL-GFsS3Fc_J38O9VSdBMCmLYvevY5DM4qlfT5aSXasH2FBTH4_QF-kcgHQhYhFQQpsC2HFZBexbVujU-jiY3tof-OqDQughKSebbPhQkboKyIfGFZrtdQ6ndDXPf8McL4X2P6ZSyXN7F_lQqePqwgVUg39v8dmDhlxTA3Am8Il17F2NHvUXdtVBLHnjyKU8MhaMZVqJZBZzyzgqqZZLzouqtI-mSl4bORrrTgmZX-b7P7-oaojGD4drKoh-SAa5ngb8sZuEOx-NsV6EbvOH-4dFEpH0_cE_15SvyD0PqpRjLZi1izO7lpw.webp?r=17c",
    "https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRI6G-YI41kxtUQ_Q7Zbv2hDMmaE6UO55X8-4MeSYoCmguFroUSLc6D3e2LpBqDv0xvH8vMC_uBJW1yNZH2PiNJhVGWcBKcgGVcsyZpP_oeVvbdBYD4LYMD52UrTWWdW6ibdJ_d9x5s5T9CZF76OrfKCCXHjUHkauask_ikoPuKd9E30OiIxNnvutvKd_FxT9YLe9Rd1lJceznPKoB0vBtZ1iI0UfRme4Stq9DuRIyr3Jx-YVbaWjDxvPjr90ihIfKXKoOxGNOFHQOv9JumyvyJAWdKvs4tNlqj7RABPczxWHAjg_WtVvyEmY7mmb2QKDaIHnebpl1NDHttdN1xsAoQ.webp?r=4e6",
    "https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYtQQuyzfpH21gbzUiC47JPBO9fctekBa91MAuaqBkJX2hq5AgldT2woVYvCfeJXURRTmZRK-nEXI2W4yyEDtLTe4fzrzyXx_kNLFCoxHcjNTWIfW-VktlZZl6wGsbL4EYFYmg2-H93j4GnJLAFUvRUfEDB3a3dAHDCvEgqkIMDRBzwI4Ggp3PQvNd-7XSbl5e8NoOY0OWJ7UFGMEnLrUlUj1r5EPNjTkk52iU3SMPdnCFX7WjFsujHobj_ljq6YIqSFOgZtCuiaXx4gTwqZm4hSGkHCbQWe7rg2WfMFjr15ua7ZpEPSTCJovK-zYgxX3hwvapFTIv4p1YCnWWtV66M9vXD1uwhDm5anxVn412cjsn2Quc8.webp?r=21e",
    "https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeNW_c9U9xz-Et1ZyU6zq1A1X3Dpuw90kY4WTTX0QqT4Rob8rlDd4Mf17LnqNX6gM74q5aFjQYrm6Qh_Q_EKy8nIXrmKqcPcmdg0zLxXZgSdtu2nUMRa6PxDDGR8M7oGuD3ujQNmDWC9aCnW3THvp4e-LQv46PNAEJwsV1pFD7CQAoFEHu_eOUHvgH2XQxsXjb4QU-pjKFKRs7nRS5N7eFOL9Slo2nWZqW5fB6jvhFJq7PPEu_qMYmS4EkjitCOpa5E8GmbfZwv4jbRGahoc1J4QLX8UuG2CzftTm8Fxw-VmMxsx-MPTM23iLhefxi2FaaLNT-JAAjzYeeEh6eS2l7I.webp?r=7a3",
    "https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABSP6k6nDqdeme4Hh-zVVU6N170Xh-Q3zThx3aIQKtPytOQUPM5hNFsuE5rsJGpkZYoecudG4Ec-m8jEkKmuQdlj-wxlUjRkf5udLNmKTmUXkkBMIbFtyEcbITSoICOsEceJOpjGp-bHd5qpkqzZWf2ZbpIld-MQfpFAJ9JbfagwMBGcYS9poGc0mrXKFnX6rCt7sXEG1YDGmlrbukiqcnETr7ZkE37-dzd-uFylm_KIpMqB_5rv-eZSVYEsaSC-cz_GeCj2g_1QAu-oO1wrP6ICUDplZ00LnsgVSEU09-O4pxjjQeZRUZDrTlkgkkiUI_YcSrrdgNigJFo1pthMezGk.webp?r=2a7",
    "https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeNW_c9U9xz-Et1ZyU6zq1A1X3Dpuw90kY4WTTX0QqT4Rob8rlDd4Mf17LnqNX6gM74q5aFjQYrm6Qh_Q_EKy8nIXrmKqcPcmdg0zLxXZgSdtu2nUMRa6PxDDGR8M7oGuD3ujQNmDWC9aCnW3THvp4e-LQv46PNAEJwsV1pFD7CQAoFEHu_eOUHvgH2XQxsXjb4QU-pjKFKRs7nRS5N7eFOL9Slo2nWZqW5fB6jvhFJq7PPEu_qMYmS4EkjitCOpa5E8GmbfZwv4jbRGahoc1J4QLX8UuG2CzftTm8Fxw-VmMxsx-MPTM23iLhefxi2FaaLNT-JAAjzYeeEh6eS2l7I.webp?r=7a3",
    "https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABekOyOEc0IMYCBzL1U12H-gMP39eTC0zZ0CawiEZfsVVEVfuzAXMWo1_7HVifGiVAezM9MLKJ-zMYF5vU2NZj1GAFKpJhPsJ9wD8412kiexuLATsJwlbCipYevBS8u1H_C0GtTn9c_dBQCtGd1H7CsnPPEeeLBX_VOpjX3-MufmSG3wQycmQXMFQVYJT4Pz8SM98uF8rVn1JhdfcmuopEFfxoojgtxEMvhFWitJ_62GUbqydRNfqfpurMuRLitUusP3nmdQGJ0G_I8ryAjgF4Ur7F2WKNrSALVuW3SarpyVl0Q4rv9U2IwglhY0wk_AGVwhJMiC1SNYaoofog4iInvE.webp?r=6b0",
    "https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZqmB__bfjnI8HxaRTLVPVw4Pm6FrTtnh9aTLJ1BlvjMTUzdL4cTECEYm2-omukFDT7AUPTklgyAgj1ydiK7daICeA49comO-FZe0lm0wFoDvSQJYSHp1PbkZh9x5ZhTKuRcW4fwIVQb86kduHg9qAE3rql1hS_z38QryzgDgwPGiaw65c9BjmeIBiVVGEm-j5Y9cwEvoLB_5RDPgfhf6fvq4xITAElFC2TyWKDSSM2wQKPGXOG1vYTeWTbWpF9M9zPedV5civ4K9TBq9kIHC0wCJfReP1avQ-oOm29KKdEc5GHeK0yNkEd2.webp?r=eb0",
    "https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZpb1_hPsfkW_3W9d6rBB1Zgh2_-XSfOSbdNd5z2GuhB-MSvR5nrjXmmK6WCPPTBNk9oFIuhS9cQWtg0TiJqXBSkdu36d7LFbjkxdYFidG5niA2rk6R8YKmg7FuZ4Z9C98CQ.webp?r=cb7",
    "https://occ-0-2610-3646.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcG13pRIelXYVY0GNdMNxAtNOwicZ2IOBI6ZnfxMs4bPhyd3sIXIMGW0JZigHMXqKB1HUWoJb2yDAf45Guk9eB9dbdtATIgM1jRx5eEYFb-P2V-f6IHFQFcXGKYwEmjmpqroRkylr_ic0v_hRzQejFkxVOH7hW1p843K0CIA6RCKEc34FziUJC3oxlNm0RKtzzLSgO7mWeungF0YcnpXu087Kxbvk7L7bDNyVWV83FnOWCRI5bVApKz3ZCLvMMaiGHaSCnaqHAgrPlD7u23_j6oH_MTD7M2i5_DuRmzQ2iM21ZY-Y8lSgqDi.webp?r=02a"
  ];

  return (
    <div className="">
      <div className="mx-28  max-lg:mx-4">
        <h2 className="text-white text-2xl font-semibold mt-10">
          Trending Now
        </h2>
        <div className="flex">
          <button className="text-white flex font-bold my-3 border border-white px-4 py-2 rounded-md">
            <select className="outline-none bg-transparent ">
              <option className="text-black ">India</option>
              <option className="text-black">Global</option>
            </select>
          </button>

          <button className="text-white flex font-bold my-3 ml-6 border border-white px-4 py-2 rounded-md">
            <select className="outline-none bg-transparent ">
              <option className="text-black ">Movies</option>
              <option className="text-black">TV Shows</option>
            </select>
          </button>
        </div>

        <div id="scrollbar" className="flex justify-between mt-5 overflow-x-scroll overflow-y-hidden ">
          {movieImg.map((src, index) => (
            <div
              key={index}
              className=" m-5 relative hover:scale-110 transition-transform duration-300 flex-none max-lg:m-7"
            >
              <img
                src={src}
                className="h-80 max-lg:h-80 rounded-lg object-cover"
                alt={`Movie ${index + 1}`}
              />
              <p
                className="absolute bottom-4 transform -translate-x-1/2 text-8xl font-extrabold "
                style={{
                  WebkitTextStroke: "1px white",
                  WebkitTextFillColor: "black",
                }}
              >
                {index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
