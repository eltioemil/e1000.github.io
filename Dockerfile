FROM ruby:3.4.5-bullseye

# Install dependencies
RUN apt-get update -qq && \
    apt-get install -y build-essential libpq-dev nodejs

# Set working directory
WORKDIR /srv/jekyll

# Install bundler and Jekyll
RUN gem install bundler jekyll
