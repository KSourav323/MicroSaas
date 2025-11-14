

export interface ServiceItem {
  tool: string;
  name: string;
  label: string;
}

export const servicesList: ServiceItem[] = [
  // IMAGE TOOLS
  { tool: "image_tool", name: "image_formatter", label: "Image Formatter" },
  { tool: "image_tool", name: "image_compressor", label: "Image Compressor" },
  { tool: "image_tool", name: "image_cropper", label: "Image Cropper" },
  { tool: "image_tool", name: "image_resizer", label: "Image Resizer" },
  { tool: "image_tool", name: "image_to_png", label: "Image to PNG" },
  { tool: "image_tool", name: "png_to_jpg", label: "PNG to JPG" },
  { tool: "image_tool", name: "jpg_to_webp", label: "JPG to WebP Converter" },
  { tool: "image_tool", name: "webp_to_png", label: "WEBP to PNG Converter" },
  { tool: "image_tool", name: "image_upscale", label: "Image Upscaler (AI)" },
  { tool: "image_tool", name: "background_remover", label: "AI Background Remover" },
  { tool: "image_tool", name: "image_colorizer", label: "AI Image Colorizer" },
  { tool: "image_tool", name: "image_sharpener", label: "Image Sharpener" },
  { tool: "image_tool", name: "image_watermark", label: "Watermark Adder" },
  { tool: "image_tool", name: "image_watermark_remover", label: "Watermark Remover" },
  { tool: "image_tool", name: "image_flip", label: "Image Flipper" },
  { tool: "image_tool", name: "image_rotate", label: "Image Rotator" },

  // PDF TOOLS
  { tool: "pdf_tool", name: "pdf_merger", label: "PDF Merger" },
  { tool: "pdf_tool", name: "pdf_splitter", label: "PDF Splitter" },
  { tool: "pdf_tool", name: "pdf_to_png", label: "PDF to PNG Converter" },
  { tool: "pdf_tool", name: "pdf_to_text", label: "PDF to Text" },
  { tool: "pdf_tool", name: "text_to_pdf", label: "Text to PDF" },
  { tool: "pdf_tool", name: "pdf_signer", label: "PDF Digital Signer" },
  { tool: "pdf_tool", name: "pdf_password", label: "PDF Password Protector" },
  { tool: "pdf_tool", name: "pdf_unlocker", label: "PDF Unlocker" },
  { tool: "pdf_tool", name: "pdf_optimizer", label: "PDF Optimizer" },
  { tool: "pdf_tool", name: "pdf_rotate", label: "Rotate PDF Pages" },

  // TEXT TOOLS
  { tool: "text_tool", name: "text_fonts", label: "Text Fonts" },
  { tool: "text_tool", name: "text_reverse", label: "Reverse Text" },
  { tool: "text_tool", name: "text_case", label: "Text Case Converter" },
  { tool: "text_tool", name: "text_wordcount", label: "Word Counter" },
  { tool: "text_tool", name: "text_sort", label: "Line Sorter" },
  { tool: "text_tool", name: "text_encrypt", label: "Text Encryptor" },
  { tool: "text_tool", name: "text_decrypt", label: "Text Decryptor" },
  { tool: "text_tool", name: "lorem_ipsum", label: "Lorem Ipsum Generator" },
  { tool: "text_tool", name: "hashtag_generator", label: "Hashtag Generator" },

  // AUDIO TOOLS
  { tool: "audio_tools", name: "audio_vocal", label: "Audio Vocal Extractor" },
  { tool: "audio_tools", name: "audio_noise", label: "Noise Reduction" },
  { tool: "audio_tools", name: "audio_speed", label: "Audio Speed Changer" },
  { tool: "audio_tools", name: "audio_pitch", label: "Pitch Shifter" },
  { tool: "audio_tools", name: "audio_converter", label: "Audio Format Converter" },
  { tool: "audio_tools", name: "text_to_speech", label: "Text to Speech" },

  // VIDEO TOOLS
  { tool: "video_tool", name: "video_compressor", label: "Video Compressor" },
  { tool: "video_tool", name: "video_to_gif", label: "Video to GIF" },
  { tool: "video_tool", name: "gif_to_video", label: "GIF to MP4" },
  { tool: "video_tool", name: "video_trimmer", label: "Video Trimmer" },
  { tool: "video_tool", name: "video_audio_extract", label: "Extract Audio from Video" },
  { tool: "video_tool", name: "video_speed", label: "Video Speed Changer" },
  { tool: "video_tool", name: "video_thumbnail", label: "Video Thumbnail Generator" },

  // COLOR TOOLS
  { tool: "color_tool", name: "color_picker", label: "Color Picker" },
  { tool: "color_tool", name: "color_palette", label: "Color Palette Generator" },
  { tool: "color_tool", name: "gradient_generator", label: "Gradient Generator" },
  { tool: "color_tool", name: "hex_to_rgb", label: "HEX to RGB Converter" },
  { tool: "color_tool", name: "rgb_to_hex", label: "RGB to HEX Converter" },

  // SEO TOOLS
  { tool: "seo_tool", name: "meta_tag_generator", label: "Meta Tag Generator" },
  { tool: "seo_tool", name: "keyword_extractor", label: "Keyword Extractor" },
  { tool: "seo_tool", name: "url_parser", label: "URL Parser" },
  { tool: "seo_tool", name: "sitemap_generator", label: "Sitemap Generator" },
  { tool: "seo_tool", name: "robot_creator", label: "robots.txt Generator" },

  // CODE TOOLS
  { tool: "code_tool", name: "json_formatter", label: "JSON Formatter" },
  { tool: "code_tool", name: "json_to_csv", label: "JSON to CSV Converter" },
  { tool: "code_tool", name: "csv_to_json", label: "CSV to JSON Converter" },
  { tool: "code_tool", name: "base64_encode", label: "Base64 Encoder" },
  { tool: "code_tool", name: "base64_decode", label: "Base64 Decoder" },
  { tool: "code_tool", name: "jwt_decoder", label: "JWT Decoder" },

  // MATH & UTILITY
  { tool: "math_tool", name: "percentage_calc", label: "Percentage Calculator" },
  { tool: "math_tool", name: "bmi_calc", label: "BMI Calculator" },
  { tool: "math_tool", name: "random_number", label: "Random Number Generator" },
  { tool: "math_tool", name: "unit_converter", label: "Unit Converter" },
  { tool: "math_tool", name: "time_converter", label: "Time Zone Converter" },

  // MISC + FUN
  { tool: "fun_tool", name: "qr_generator", label: "QR Code Generator" },
  { tool: "fun_tool", name: "meme_text", label: "Meme Text Generator" },
  { tool: "fun_tool", name: "ascii_art", label: "ASCII Art Generator" },
  { tool: "fun_tool", name: "emoji_picker", label: "Emoji Picker" },
];

