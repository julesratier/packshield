
/**
 * Extracts table of contents from blog post HTML content
 */
export const extractTableOfContents = (content: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  const headers = doc.querySelectorAll('h2');
  
  return Array.from(headers).map(header => ({
    id: header.id,
    title: header.textContent || ''
  }));
};

/**
 * Prepares blog content with consistent styling
 */
export const prepareBlogContent = (content: string) => {
  return content
    .replace(/<h2/g, '<h2 class="text-2xl md:text-3xl font-bold text-packshield-navy mt-12 mb-6"')
    .replace(/<p>/g, '<p class="text-slate-700 leading-relaxed mb-6">')
    .replace(/<ul>/g, '<ul class="space-y-2 my-6 ml-5">')
    .replace(/<li>/g, '<li class="flex items-start"><span class="inline-block w-2 h-2 bg-packshield-orange rounded-full mt-2 mr-3"></span>')
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-packshield-orange pl-6 italic my-8 text-slate-600 py-2">')
    .replace(/<div class="tip-box">/g, '<div class="bg-packshield-lightGrey border-l-4 border-packshield-orange p-6 rounded-r-lg my-8">');
};
