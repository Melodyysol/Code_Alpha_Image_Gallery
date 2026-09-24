export function Feature() {
  return (
    <section className="features py-20 bg-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <p className="text-lg mb-8">
          Explore the amazing features of our image gallery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="feature-card p-6 bg-base-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Upload Images</h3>
            <p>
              Easily upload your favorite images and share them with the
              community.
            </p>
          </article>
          <article className="feature-card p-6 bg-base-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Browse Gallery</h3>
            <p>
              Discover stunning images uploaded by other users from around the
              world.
            </p>
          </article>
          <article className="feature-card p-6 bg-base-200 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Community Interaction
            </h3>
            <p>
              Engage with the community by liking, commenting, and sharing your
              favorite images.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
