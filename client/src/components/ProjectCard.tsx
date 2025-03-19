interface ProjectCardProps {
  title: string;
  image: string;
  category?: string;
}

export default function ProjectCard({ title, image, category }: ProjectCardProps) {
  return (
    <div 
      className="group relative aspect-square bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white">
          <h3 className="text-xl font-semibold mb-2">
            <a href="#" className="hover:text-primary transition-colors">
              {title}
            </a>
          </h3>
          {category && <span className="text-sm">{category}</span>}
        </div>
      </div>
    </div>
  );
}