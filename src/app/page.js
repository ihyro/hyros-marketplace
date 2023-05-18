import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div div className="container mx-auto h-screen justify-center py-40">
      <header className="w-64 mx-auto">
        <nav className="flex justify-between">
          <Link
            href="/signup"
            className="border-solid border-2 rounded-full px-6 py-2 text-md hover:bg-white hover:text-black"
          >
            Kayıt Ol
          </Link>
          <Link
            href="/signin"
            className="border-solid border-2 rounded-full px-6 py-2 text-md hover:bg-white hover:text-black"
          >
            Giriş Yap
          </Link>
        </nav>
      </header>

      <main>
        <h1 className="text-9xl text-center py-24 ">HYRO'S STORE</h1>
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          <Link
            href="/products/ipads"
            class="w-full max-w-sm bg-black rounded-lg shadow"
          >
            <div>
              <img
                class="p-8 h-72 w-full object-contain rounded-t-lg"
                src="https://cdn.shopify.com/s/files/1/0471/6039/3896/products/apple_ipad-pro-spring-2021_istock-bd_95837118-6d80-462c-be0a-631951164cec.png?v=1647236299"
                alt="product image"
              />
            </div>
            <div class="px-5  pb-5">
              <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                Ipad Pro
              </h5>
            </div>
          </Link>

          <Link
            href="/products/macbooks"
            class="w-full max-w-sm bg-black rounded-lg shadow h-16 max-h-40"
          >
            <div>
              <img
                class="p-8 h-72 w-full object-contain rounded-t-lg"
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=4000&hei=2444&fmt=png-alpha&.v=1671304673202"
              />
            </div>
            <div class="px-5 pb-5">
              <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                Macbook Pro
              </h5>
            </div>
          </Link>

          <Link
            href="/products/iphones"
            class="w-full max-w-sm bg-black rounded-lg shadow"
          >
            <div>
              <img
                class="p-8 w-full h-72 object-contain rounded-t-lg"
                src="https://iphoneswholesale.com/wp-content/uploads/2022/07/apple-iphone.png"
                alt="product image"
              />
            </div>
            <div class="px-5 pb-5">
              <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                iPhone
              </h5>
            </div>
          </Link>

          <Link
            href="/products/applewatch"
            class="w-full  max-w-sm bg-black rounded-lg shadow"
          >
            <div>
              <img
                class="p-8 w-full h-72 object-contain rounded-t-lg"
                src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/aksesuar/Apple/watch-series-3-42mm/cg/1.png"
                alt="product image"
              />

              <div class="px-5 pb-5">
                <h5 class="text-xl font-semibold tracking-tight text-gray-300 dark:text-white text-center">
                  Apple Watch
                </h5>
              </div>
            </div>
          </Link>
        </nav>
      </main>
    </div>
  );
}
