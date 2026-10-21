import { motion } from "motion/react"

const foodItems = [
    {
        id: 1,
        name: "Merchandise",
        img: "images/merch.jpg",
        bgColor: "border-pink-300 border-[2px] border-dashed",
        ring: "ring-pink-400",
        iconColor: "text-orange-600",
        hoverBg: "hover:border-pink-400 hover:bg-pink-50",
    },
    {
        id: 2,
        name: "Gift Card",
        img: "images/gift-card.jpeg",
        bgColor: "border-yellow-300 border-[2px] border-dashed",
        ring: "ring-yellow-400",
        iconColor: "text-red-600",
        hoverBg: "hover:border-yellow-400 hover:bg-yellow-50",
    },
    {
        id: 3,
        name: "Experiences",
        img: "images/experience.jpg",
        bgColor: "border-green-300 border-[2px] border-dashed",
        ring: "ring-green-400",
        iconColor: "text-pink-600",
        hoverBg: "hover:border-green-400 hover:bg-green-50",
    },
    {
        id: 4,
        name: "Apparels",
        img: "images/appraels.webp",
        bgColor: "border-blue-300 border-[2px] border-dashed",
        ring: "ring-blue-400",
        iconColor: "text-amber-700",
        hoverBg: "hover:border-blue-400 hover:bg-blue-50",
    },
    {
        id: 5,
        name: "Home & Living",
        img: "images/home.jpg",
        bgColor: "border-purple-300 border-[2px] border-dashed",
        ring: "ring-purple-400",
        iconColor: "text-pink-500",
        hoverBg: "hover:border-purple-400 hover:bg-purple-50",
    },
    {
        id: 6,
        name: "Travel",
        img: "images/travel.jpg",
        bgColor: "border-orange-300 border-[2px] border-dashed",
        ring: "ring-orange-400",
        iconColor: "text-green-600",
        hoverBg: "hover:border-orange-400 hover:bg-orange-50",
    },
    {
        id: 7,
        name: "Gadgets",
        img: "images/gadgets.webp",
        bgColor: "border-rose-300 border-[2px] border-dashed",
        ring: "ring-rose-400",
        iconColor: "text-purple-600",
        hoverBg: "hover:border-rose-400 hover:bg-rose-50",
    },
    {
        id: 8,
        name: "Wellness",
        img: "images/yoga.avif",
        bgColor: "border-emerald-300 border-[2px] border-dashed",
        ring: "ring-emerald-400",
        iconColor: "text-green-700",
        hoverBg: "hover:border-emerald-400 hover:bg-emerald-50",
    },
    {
        id: 9,
        name: "Automotive",
        img: "images/cars.webp",
        bgColor: "border-pink-300 border-[2px] border-dashed",
        ring: "ring-pink-400",
        iconColor: "text-orange-600",
        hoverBg: "hover:border-pink-400 hover:bg-pink-50",
    },
    {
        id: 10,
        name: "Work Essentials",
        img: "images/work-essentials.jpg",
        bgColor: "border-yellow-300 border-[2px] border-dashed",
        ring: "ring-yellow-400",
        iconColor: "text-red-600",
        hoverBg: "hover:border-yellow-400 hover:bg-yellow-50",
    },
    {
        id: 11,
        name: "Charity",
        img: "images/charity.jpg",
        bgColor: "border-green-300 border-[2px] border-dashed",
        ring: "ring-green-400",
        iconColor: "text-pink-600",
        hoverBg: "hover:border-green-400 hover:bg-green-50",
    },
    {
        id: 12,
        name: "Great Offers",
        img: "images/offer.jpg",
        bgColor: "border-blue-300 border-[2px] border-dashed",
        ring: "ring-blue-400",
        iconColor: "text-amber-700",
        hoverBg: "hover:border-blue-400 hover:bg-blue-50",
    },
];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}


const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
        },
    },
}


export default function FoodCard() {
    return (
        <div className="min-h-screen w-full py-10">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}>
                    <h2
                        className="text-3xl font-bold text-center mb-4"
                    >
                        Endless Choices. One Trusted Partner.
                    </h2>
                    <p
                        className="text-center mb-12 text-lg"
                    >
                        From curated goodies to branded merchandise—we’ve got something for everyone.
                    </p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {foodItems.map((item) => {
                        return (
                            <motion.div
                                key={item.id}
                                className={`${item.bgColor} ${item.hoverBg} hover:shadow-lg rounded-xl p-6 py-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors duration-300`}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,

                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                    },
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* img Circle */}
                                <div
                                    className={`${item.ring} w-40 h-40 bg-white overflow-hidden ring-2 ring-offset-4 ring-gray-200 rounded-full flex items-center justify-center mb-10`}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover border-2 border-gray-300 rounded-full"
                                    />
                                </div>

                                {/* Food Name */}
                                <h3
                                    className="text-xl font-semibold mb-2"
                                >
                                    {item.name}
                                </h3>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}
