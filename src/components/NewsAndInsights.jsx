// import { User } from "react-icons";
import HouseImage from "../assets/jpg/home.png";
import Title from "../components/Title";
const NewsAndInsights = () => {
  // Sample data for articles
  const articles = [
    {
      id: 1,
      title: "How to Stage Your Home for a Quick Sale: What You Should Know",
      image: HouseImage,
      date: "September 24th",
      author: "Anne Manz",
      featured: true,
    },
    {
      id: 2,
      title: "Top 5 Tips for First-Time Homebuyers",
      image: "/images/homebuyers.jpg",
      date: "September 24th",
      author: "Anne Manz",
      featured: false,
    },
    {
      id: 3,
      title: "The Benefits of Hiring a Property Manager",
      image: "/images/property-manager.jpg",
      date: "September 24th",
      author: "Anne Manz",
      featured: false,
    },
    {
      id: 4,
      title: "Investing in Real Estate: What You Need to Consider",
      image: "/images/investing.jpg",
      date: "September 24th",
      author: "Anne Manz",
      featured: false,
    },
  ];

  // Featured article (the first one with the large image)
  const featuredArticle = articles.find((article) => article.featured);

  // Regular articles (the smaller ones on the right)
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <div className='inner_responsiveWidth mx-auto px-4 py-12'>
      <div className='flex lg:justify-center mb-8 lg:mb-16'>
        <Title title={"Latest News and Insights"} />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 '>
        {/* Featured Article (Left Column) */}
        <div className='lg:col-span-3'>
          <div className='px-[16px] py-[18px] bg-white rounded-[25px] overflow-hidden shadow-md h-full'>
            <img
              src={featuredArticle.image || "/placeholder.svg"}
              alt={featuredArticle.title}
              // <img class=" rounded-[20px]" src="https://placehold.co/950x427" />
              className='w-full h-64 max-w-[950.48px] max-h-[427px] object-cover rounded-[20px]'
            />
            <div className='py-6'>
              <h3 className='text-[#365272] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-plus-jakarta-sans leading-normal lg:leading-[57.60px] mb-3'>
                {featuredArticle.title}
              </h3>
              <div className='flex items-center  text-sm mb-2'>
                <div className='self-stretch inline-flex justify-start items-start gap-[35px]'>
                  <p className='justify-start text-pri text-[9.83px] sm:text-sm md:text-xl lg:text-2xl font-normal font-plus-jakarta-sans lg:leading-[31.20px]'>
                    {featuredArticle.date}
                  </p>
                  <p className='justify-start text-pri text-[9.83px] sm:text-sm md:text-xl lg:text-2xl font-normal font-plus-jakarta-sans lg:leading-[31.20px]'>
                    by {featuredArticle.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Articles (Right Column) */}
        <div className='lg:col-span-2'>
          <div className='grid gap-6'>
            {regularArticles.slice(0, 3).map((article) => (
              <div
                key={article.id}
                className='flex items-start px-5 py-4 lg:py-[25px] bg-white rounded-xl lg:rounded-[25px]'
              >
                <div className='flex-1'>
                  <h3 className='self-stretch justify-start text-[#365272] text-base sm:text-2xl lg:text-3xl xl:text-[2.5rem] font-semibold font-plus-jakarta-sans lg:leading-[48px]'>
                    {article.title}
                  </h3>

                  <div className='self-stretch mt-3 inline-flex justify-start items-start gap-3 lg:gap-[35px]'>
                    <div className='justify-start text-[#002b52] text-[9.83px] sm:text-sm md:text-xl lg:text-2xl font-normal font-plus-jakarta-sans leading-normal lg:leading-[31.20px]'>
                      {article.date}
                    </div>
                    <div className='justify-start text-[#002b52] text-[9.83px] sm:text-sm md:text-xl lg:text-2xl font-normal font-plus-jakarta-sans leading-normal lg:leading-[31.20px]'>
                      by {article.author}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndInsights;
