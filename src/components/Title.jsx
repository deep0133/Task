const Title = ({ title, classNames = "font-semibold" }) => {
  return (
    <h2
      className={`${classNames} text-[#365272] text-[1.63rem] sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[4rem] font-plus-jakarta-sans leading-10 md:leading-[48px] lg:leading-[54px] xl:leading-[64px] 2xl:leading-[76.80px]`}
    >
      {title}
    </h2>
  );
};

export default Title;
