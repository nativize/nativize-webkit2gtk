#include <gtk/gtk.h>
#include <webkit2/webkit2.h>

int main(int argc, char **argv) {
  gtk_init(&argc, &argv);

  // Create main window
  GtkWidget *main_window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  gtk_window_set_default_size(GTK_WINDOW(main_window), 800, 600);

  // Create WebKit WebView
  WebKitWebView *web_view = WEBKIT_WEB_VIEW(webkit_web_view_new());
  gtk_container_add(GTK_CONTAINER(main_window), GTK_WIDGET(web_view));

  // Load URL
  webkit_web_view_load_uri(web_view, "https://github.com/nativize");

  // Connect signals
  g_signal_connect(main_window, "destroy", G_CALLBACK(gtk_main_quit), NULL);

  // Show all widgets
  gtk_widget_show_all(main_window);

  // Run main loop
  gtk_main();

  return 0;
}
